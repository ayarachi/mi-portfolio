import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_maaflev";
const TEMPLATE_ID = "template_00ayl12";
const PUBLIC_KEY = "JRjJ0HSShken78qFS";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ayarachi",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayarachi/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setSending(false);
      });
  }

  return (
    <section id="contact" className="bg-gray-950 px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Contact
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Have an opportunity or just want to connect? Send me a message.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your name"
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="your@email.com"
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-gray-950 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {sending ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-sm text-center">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or reach out directly via LinkedIn.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-12">
          {socials.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
