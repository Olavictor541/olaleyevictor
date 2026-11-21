import { useState, type ChangeEvent, type FormEvent } from "react";
import { Page, PageHeader } from "../components/ui";
import { usePageTitle } from "../components/usePageTitle";
import { profile } from "../data";

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // The site is static, so the form opens the visitor's email app with everything filled in.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

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
        <h2 className="font-display text-[22px] font-semibold text-title mb-2">Send a message</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="name" aria-label="Name" placeholder="Name" autoComplete="name" required value={form.name} onChange={onChange} className={field} />
          <input name="email" aria-label="Email" placeholder="Email" type="email" autoComplete="email" required value={form.email} onChange={onChange} className={field} />
        </div>
        <textarea name="message" aria-label="Message" placeholder="Message" rows={5} required value={form.message} onChange={onChange} className={`${field} resize-y`} />
        <div className="flex flex-wrap items-center gap-4 mt-1">
          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-2.5 font-sans text-[15px] font-semibold text-accentink hover:opacity-90 transition-opacity"
          >
            Send
          </button>
          <p aria-live="polite" className="font-sans text-[15px] font-medium text-faint">
            {sent && "Your email app should open with the message ready to send."}
          </p>
        </div>
      </form>
    </Page>
  );
}
