import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight, Check, Copy, MapPin, Send } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { usePageTitle } from "../components/usePageTitle";
import { profile } from "../data";

const topics = ["Website / App", "Branding & Identity", "Storefront Signage", "UI/UX Design", "Research", "Just saying hi"];

const socialLinks = [
  { name: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { name: "LinkedIn", handle: "in/olaleye-victor", href: profile.linkedin, icon: FaLinkedin },
  { name: "GitHub", handle: "@Olavictor541", href: profile.github, icon: FaGithub },
];

type Status = "idle" | "sent" | "error";

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * The site is static (GitHub Pages), so the form composes a ready-to-send
   * email in the visitor's mail app with everything pre-filled.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `[Portfolio] ${form.topic} from ${form.name}`;
    const body = `Hi Victor,\n\n${form.message}\n\n${form.name}\n${form.email}`;
    try {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", profile.email);
    }
  };

  const inputCls =
    "w-full bg-zinc-950 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-orange-200 focus:outline-none focus:ring-1 focus:ring-orange-200 transition-colors";

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeading eyebrow="Contact">LET'S TALK</SectionHeading>
          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl">
            Have a project in mind, want to collaborate, or just want to say hi? I'm always open to new opportunities,
            from websites and brand identities to research and art commissions.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* ---------- FORM ---------- */}
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 p-6 md:p-10 space-y-6">
              <fieldset>
                <legend className="text-sm font-semibold mb-3 text-gray-300">What's this about?</legend>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <label
                      key={t}
                      className={`cursor-pointer px-4 py-2 rounded-full text-sm border transition-colors ${
                        form.topic === t
                          ? "bg-orange-200 text-black border-orange-200"
                          : "border-white/20 text-gray-300 hover:border-white/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="topic"
                        value={t}
                        checked={form.topic === t}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputCls} resize-y min-h-[140px]`}
                  placeholder="Tell me about your project, timeline and budget…"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 bg-orange-200 text-black font-bold py-4 rounded-xl hover:bg-orange-300 transition-colors"
              >
                Send message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div aria-live="polite" className="text-sm min-h-[1.25rem]">
                {status === "sent" && (
                  <p className="text-lime-300">
                    Your email app should now open with the message ready to send. Nothing happened? Email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="underline">
                      {profile.email}
                    </a>
                    .
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400">
                    Something went wrong. Please email me directly at {profile.email}.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          {/* ---------- DIRECT LINKS ---------- */}
          <Reveal delay={150}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connect with me</h2>
            <div className="space-y-3">
              {socialLinks.map(({ name, handle, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 hover:border-orange-200/50 hover:bg-zinc-950 transition-colors"
                >
                  <span className="w-12 h-12 rounded-xl bg-white/5 grid place-items-center group-hover:bg-orange-200 group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold">{name}</span>
                    <span className="block text-sm text-gray-400 truncate">{handle}</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-orange-200 group-hover:rotate-45 transition-all" />
                </a>
              ))}
            </div>

            <button
              onClick={copyEmail}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 py-4 text-sm text-gray-300 hover:border-orange-200 hover:text-orange-200 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Email copied!" : "Copy email address"}
            </button>

            <div className="mt-8 rounded-2xl bg-orange-200 text-black p-6">
              <div className="flex items-center gap-2 font-semibold">
                <MapPin className="w-4 h-4" /> {profile.location}
              </div>
              <p className="mt-2 text-sm text-black/70">
                Based on Vancouver Island and working with clients remotely.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
