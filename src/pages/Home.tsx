import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Settings2,
  ShieldCheck,
  MapPin,
  MessageSquare,
  FileSearch,
  PlayCircle,
} from 'lucide-react';
import { services } from '@/data/services';

const advantages = [
  {
    icon: Layers,
    title: 'Simple',
    description: 'Straightforward support without unnecessary complexity.',
  },
  {
    icon: Settings2,
    title: 'Flexible',
    description: 'Services can be tailored to individual and business needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable',
    description: 'Clear communication and organized execution.',
  },
  {
    icon: MapPin,
    title: 'U.S.-Focused',
    description: 'Services designed to support customers and businesses operating in the United States.',
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Describe the task, project, or ongoing support you need.',
  },
  {
    icon: FileSearch,
    title: 'We Review the Request',
    description: 'We confirm the scope, requirements, timing, and pricing.',
  },
  {
    icon: PlayCircle,
    title: 'We Get to Work',
    description:
      'UPFREAK provides the agreed-upon support and keeps communication clear throughout the process.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              <CheckCircle2 className="h-4 w-4" />
              California-based U.S. Company
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Practical Business Support.{' '}
              <span className="text-blue-600">Done Right.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              UPFREAK LLC provides reliable administrative and business support
              services for individuals, entrepreneurs, and small businesses
              across the United States.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How We Can Help
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A range of administrative and business support services designed to
              save you time and keep things organized.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform group-hover:scale-110 group-hover:bg-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why UPFREAK */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why UPFREAK
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We focus on what matters: clear, dependable support that fits your
              needs.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple, straightforward process from start to finish.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-slate-200 to-transparent" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Tell us what you need help with, and we'll get back to you as soon as
            possible.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
