import { useState, type ChangeEvent, type FormEvent } from "react";
import { Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { profile } from "../data";

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "activate" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // The site has no server of its own, so messages go through FormSubmit (formsubmit.co),
  // a free service that forwards form submissions to my inbox. The very first message
  // sends me an activation email; until I click it, messages are held.
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honey = new FormData(e.currentTarget).get("_honey");
    if (honey) return; // a bot filled in the hidden field
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Website message from ${form.name}`,
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === "true") {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else if (/activat/i.test(String(data.message ?? ""))) {
        setStatus("activate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Backup: open the visitor's own email app with the message filled in
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${form.name || "your website"}`)}&body=${encodeURIComponent(form.message)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", profile.email);
    }
  };

  const field =
    "w-full rounded-md border border-line bg-card px-4 py-3 font-sans text-[16px] text-title placeholder:text-faint focus:outline-none focus:border-[color:var(--accent)] transition-colors";

  return (
    <Page>
      <PageHeader title="Contact" subtitle="Questions, projects, commissions or just hello." />

      <div className="prose-body mt-10">
        <p>
          The best way to reach me is email at{" "}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>{" "}
          <button
            onClick={copy}
            className="align-middle ml-1 rounded-full bg-well px-2.5 py-0.5 font-sans text-[13px] font-semibold text-caption hover:text-item transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </p>
        <p>
          I'm open to web projects, collaborations, art commissions, or just a chat about code. You can also find me on{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a> and{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-12 flex flex-col gap-3">
        {/* Hidden from people; bots tend to fill it in */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <h2 className="font-display text-[22px] font-semibold text-title mb-2">Send a message</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="name" aria-label="Name" placeholder="Name" autoComplete="name" required value={form.name} onChange={onChange} className={field} />
          <input name="email" aria-label="Email" placeholder="Email" type="email" autoComplete="email" required value={form.email} onChange={onChange} className={field} />
        </div>
        <textarea name="message" aria-label="Message" placeholder="Message" rows={5} required value={form.message} onChange={onChange} className={`${field} resize-y`} />
        <div className="flex flex-wrap items-center gap-4 mt-1">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-accent px-6 py-2.5 font-sans text-[15px] font-semibold text-accentink hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          <p aria-live="polite" className="font-sans text-[15px] font-medium text-faint">
            {status === "sent" && "Thanks! Your message is on its way to me."}
            {status === "activate" && "Message received. I'll see it as soon as my inbox finishes setting up."}
            {status === "error" && (
              <>
                That didn't go through. Please{" "}
                <a href={mailtoHref} className="link">email me directly</a> instead.
              </>
            )}
          </p>
        </div>
      </form>
    </Page>
  );
}
