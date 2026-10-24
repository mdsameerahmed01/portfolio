"use client";

import { useState } from "react";
import { personalData } from "@/data/content";
import {
  Mail,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const { contact } = personalData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", botcheck: false });
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });
  const [errors, setErrors] = useState({});

  // Copy email to clipboard with toast
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    if (formStatus.state === "loading") return;

    // Honeypot check
    if (formData.botcheck) {
      setFormStatus({ state: "error", message: "Spam detected." });
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!apiKey) {
      setFormStatus({
        state: "error",
        message:
          "Form submission key is not configured yet. Please email me directly at " +
          contact.email,
      });
      return;
    }

    setFormStatus({ state: "loading", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: contact.subject || "New message from portfolio",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: contact.email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({
          state: "success",
          message: "Message sent! Thank you for getting in touch. I will reply soon.",
        });
        setFormData({ name: "", email: "", message: "", botcheck: false });
        setErrors({});
      } else {
        setFormStatus({
          state: "error",
          message: result.message || "Failed to deliver message. Please reach out via email directly.",
        });
      }
    } catch {
      setFormStatus({
        state: "error",
        message: "Network error occurred. Please send your message directly to " + contact.email,
      });
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-400/10 border border-sky-400/20">
            {contact.sectionNumber} // CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {contact.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-10 max-w-xl">
          {contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Channels & Copy Email (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Card with Copy button */}
            <div className="rounded-2xl border border-white/10 bg-[#12121a] p-5 card-hover-glow transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-sky-400/10 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                Direct Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-semibold text-white hover:text-sky-400 transition-colors break-all mt-1 block"
              >
                {contact.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-[#12121a] card-hover-glow transition-all group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                    LinkedIn
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                    md-sameer-ahmed
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-[#12121a] card-hover-glow transition-all group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                    GitHub
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                    mdsameerahmed01
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Right Column: Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-[#12121a] p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the form below to deliver an instant email message.
              </p>

              {/* Status messages */}
              {formStatus.state === "success" && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message delivered successfully!</p>
                    <p className="text-emerald-400/90 text-xs mt-0.5">
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}

              {formStatus.state === "error" && (
                <div className="mb-6 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message not sent</p>
                    <p className="text-rose-400/90 text-xs mt-0.5">
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for bot protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={formData.botcheck}
                  onChange={(e) =>
                    setFormData({ ...formData, botcheck: e.target.checked })
                  }
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    disabled={formStatus.state === "loading"}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.02] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-white/10 focus:border-sky-400/60 focus:ring-sky-400/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. john@example.com"
                    disabled={formStatus.state === "loading"}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.02] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-white/10 focus:border-sky-400/60 focus:ring-sky-400/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    disabled={formStatus.state === "loading"}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.02] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message
                        ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-white/10 focus:border-sky-400/60 focus:ring-sky-400/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus.state === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-sky-400/20 transition-all cursor-pointer"
                >
                  {formStatus.state === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
