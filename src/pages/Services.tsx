import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              UPFREAK LLC offers a range of administrative and business support
              services designed to help individuals, entrepreneurs, and small
              businesses save time and stay organized.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex gap-6 rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform group-hover:scale-110 group-hover:bg-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900">
              Important Note
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              UPFREAK LLC provides general administrative and business support
              services. We do not provide legal, tax, accounting, investment,
              banking, immigration, insurance, healthcare, employment-agency, or
              other regulated professional services. Information on this website
              is for general informational purposes only.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
