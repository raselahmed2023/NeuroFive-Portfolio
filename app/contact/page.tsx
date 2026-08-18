"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-slate-800 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Have a question, project idea, or collaboration opportunity?
            Feel free to send me a message.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Let&apos;s work together
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-slate-400">
              You can contact me for web development projects, collaboration,
              internship opportunities, or any development-related discussion.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium text-white">
                    raselahmediu@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium text-white">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            {success && (
              <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                Your message has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    placeholder="Your name"
                    className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${
                      errors.name
                        ? "border-red-500"
                        : "border-slate-700 focus:border-cyan-400"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${
                      errors.email
                        ? "border-red-500"
                        : "border-slate-700 focus:border-cyan-400"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      subject: event.target.value,
                    })
                  }
                  placeholder="Project discussion"
                  className={`w-full rounded-lg border bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${
                    errors.subject
                      ? "border-red-500"
                      : "border-slate-700 focus:border-cyan-400"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  className={`w-full resize-none rounded-lg border bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${
                    errors.message
                      ? "border-red-500"
                      : "border-slate-700 focus:border-cyan-400"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}