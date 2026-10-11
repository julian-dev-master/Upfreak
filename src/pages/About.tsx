import { Link } from 'react-router-dom';
import { ArrowRight, Target, MapPin } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About UPFREAK
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Straightforward, dependable support for everyday administrative and
              operational needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                UPFREAK LLC was created to provide straightforward, dependable
                support for people and businesses dealing with everyday
                administrative and operational needs. We focus on practical
                assistance, clear communication, and flexible service rather than
                making simple tasks unnecessarily complicated.
              </p>
              <p>
                Our goal is to help clients spend less time handling repetitive
                administrative work and more time focusing on the things that
                matter most to them and their businesses.
              </p>
              <p>
                UPFREAK LLC is a California limited liability company serving
                clients in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                Our Approach
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We believe support should be simple, clear, and adaptable. Whether
                you need help with a one-time task or ongoing assistance, we work
                with you to understand your needs and provide practical help
                without unnecessary overhead.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                Based in California
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                UPFREAK LLC is a California limited liability company serving
                clients across the United States. Our services are designed to
                support customers and businesses operating in the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let's talk about what you need
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
