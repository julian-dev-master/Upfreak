import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Send, Loader2, Mail } from 'lucide-react';
import { serviceOptions } from '@/data/services';

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  service_needed: string;
  message: string;
}

const initialState: FormState = {
  full_name: '',
  email: '',
  phone: '',
  company_name: '',
  service_needed: '',
  message: '',
};

const CONTACT_EMAIL = 'hello@upfreak.com';

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const subject = `Service Request: ${form.service_needed || 'General Inquiry'}`;
    const body = [
      `Name: ${form.full_name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.company_name ? `Company: ${form.company_name}` : '',
      `Service Needed: ${form.service_needed}`,
      '',
      'Message:',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('success');
      setForm(initialState);
    }, 800);
  };

  if (status === 'success') {
    return (
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-10 text-center shadow-lg ring-1 ring-slate-200/60">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              Your email is ready to send
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Your email application should have opened with your request pre-filled.
              If it didn't open automatically, please email us directly at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Send Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Tell us what you need help with, and we'll get back to you as soon
              as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3 rounded-lg bg-blue-50 p-4 ring-1 ring-inset ring-blue-200">
            <Mail className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <p className="text-sm text-blue-700">
              Fill out the form below and we'll open your email app with the
              details pre-filled. Or email us directly at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold underline hover:text-blue-800"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={form.full_name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Company Name <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={form.company_name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Smith & Co."
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="service_needed"
                className="block text-sm font-medium text-slate-700"
              >
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service_needed"
                name="service_needed"
                required
                value={form.service_needed}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Tell us about the task, project, or ongoing support you need..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Preparing...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Request
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
