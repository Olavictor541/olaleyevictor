import { useState, type ChangeEvent, type FormEvent } from "react";
import { PageIntro, Section } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";
import { profile } from "../data";

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // The site is static, so the form opens the visitor's email app with the message filled in.
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
    "w-full rounded-md border rule bg-white dark:bg-stone-900 px-3.5 py-2.5 text-[16px] placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors";

  return (
    <>
      <PageIntro title="Contact">
        <p>
          The easiest way to reach me is email. I'm open to web projects, branding and signage, art commissions, or just
          a chat.
        </p>
      </PageIntro>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="text-lg sm:text-xl font-medium link break-all"
        >
          {profile.email}
        </a>
        <button
          onClick={copy}
          className="text-sm muted border rule rounded-full px-3 py-1 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <Section title="Elsewhere">
        <ul className="divide-y divide-stone-200 dark:divide-stone-800 border-y rule">
          {[
            { label: "LinkedIn", handle: "in/olaleye-victor", href: profile.linkedin },
            { label: "GitHub", handle: "@Olavictor541", href: profile.github },
          ].map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex justify-between gap-4 py-4">
                <span className="font-medium group-hover:underline underline-offset-[3px] decoration-stone-400">{l.label}</span>
                <span className="text-[15px] muted">{l.handle} ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Or send a message">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm mb-1.5 muted">Name</span>
              <input name="name" autoComplete="name" required value={form.name} onChange={onChange} className={field} />
            </label>
            <label className="block">
              <span className="block text-sm mb-1.5 muted">Email</span>
              <input name="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} className={field} />
            </label>
          </div>
          <label className="block">
            <span className="block text-sm mb-1.5 muted">Message</span>
            <textarea name="message" rows={5} required value={form.message} onChange={onChange} className={`${field} resize-y`} />
          </label>
          <button
            type="submit"
            className="rounded-md bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 px-5 py-2.5 text-[15px] font-medium hover:opacity-85 transition-opacity"
          >
            Send
          </button>
          <p aria-live="polite" className="text-sm muted min-h-[1.25rem]">
            {sent && "Your email app should open with the message ready. If it didn't, email me at the address above."}
          </p>
        </form>
      </Section>
    </>
  );
}
