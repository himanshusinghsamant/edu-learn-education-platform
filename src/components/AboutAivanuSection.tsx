import React from 'react';

export const AboutAivanuSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Soft background accents */}
      <span className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white shadow-2xl ring-1 ring-black/10 mb-5">
            <span className="text-sm font-semibold">✦ ABOUT AIVANU</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            Where Technology Meets Career Excellence
          </h2>
          <p
            className="mt-5 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            AIVANU is a premium technology learning and career acceleration institute focused on building industry-ready
            professionals in Artificial Intelligence, Data Science, Full-Stack Development, and Future Technologies.
          </p>
          <p
            className="mt-3 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            We operate at the intersection of education, innovation, and enterprise needs — designing programs that
            don’t just teach skills, but shape high-impact careers. Our training philosophy is simple: precision
            learning, real-world mastery, and outcome-driven career growth.
          </p>
        </div>

        {/* Why AIVANU Exists */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-yellow-400/40 via-amber-400/30 to-orange-400/40 animate-slide-up">
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h3
                className="text-2xl font-extrabold text-gray-900 mb-3"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
              >
                Why AIVANU Exists
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                The modern tech industry doesn’t hire certificates — it hires capability, execution, and decision-makers.
                AIVANU was created to bridge the gap between:
              </p>
              <ul className="mt-4 space-y-2 text-gray-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Traditional education</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>And real enterprise-level performance</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Every program at AIVANU is structured to mirror actual industry workflows, tools, and expectations.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-sky-400/40 via-purple-400/30 to-fuchsia-400/40 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <h3
                className="text-2xl font-extrabold text-gray-900 mb-3"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                To become a global benchmark for premium technology education — where ambition is refined into expertise,
                and expertise into long-term professional success.
              </p>
            </div>
          </div>
        </div>

        {/* What Defines the AIVANU Standard */}
        <div className="mb-12 lg:mb-16">
          <h4
            className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            What Defines the AIVANU Standard
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              'Executive-grade curriculum aligned with industry demand',
              'Real-world project-driven learning',
              'Precision mentorship by experienced professionals',
              'Career-first approach with placement guidance',
              'Global-level skill standards, not classroom theory',
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500" />
                  <p className="text-gray-800 font-medium leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY AIVANU */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-white shadow ring-1 ring-black/10 mb-4">
            <span className="text-xs font-semibold">✦ WHY AIVANU</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            Because the Future Doesn’t Belong to the Average. It Belongs to the Prepared.
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-5xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            AIVANU was built on a single uncompromising belief: careers are not built by watching — they are forged through
            precision, pressure, and performance. We function as a career engineering firm — where talent is professionally
            constructed for real industry dominance. While others sell courses, we build professionals who command value.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4 lg:gap-6">
            {[
              {
                title: 'Enterprise-Grade Training Standards',
                desc:
                  'Our curriculum aligns with how global companies actually function — not how classrooms operate.',
              },
              {
                title: 'Execution Over Explanation',
                desc:
                  'You don’t “learn” at AIVANU. You perform, deploy, optimize, and deliver.',
              },
              {
                title: 'Career-First Architecture',
                desc:
                  'Every learning path is reverse-engineered from job roles, hiring expectations, and compensation benchmarks.',
              },
              {
                title: 'Precision Mentorship Model',
                desc:
                  'Guidance with structure, accountability, and real-world strategic insight — not generic advice.',
              },
              {
                title: 'Long-Term Professional Positioning',
                desc:
                  'We don’t prepare you for your next job. We position you for your next decade.',
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <h5 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                  {f.title}
                </h5>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            AIVANU is not designed for mass consumption. It is built for high-intent individuals with serious career ambition.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-black text-white shadow ring-1 ring-black/10 mb-4">
            <span className="text-xs font-semibold">✦ WHAT WE OFFER</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            A Complete High-Performance Ecosystem for Elite Tech Careers
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed max-w-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Everything inside AIVANU is engineered with one outcome in mind: high-impact roles, premium compensation, and
            long-term professional authority.
          </p>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                title: 'Artificial Intelligence & Machine Learning',
                desc: 'From fundamental intelligence to enterprise-scale AI systems.',
              },
              {
                title: 'Data Science, Analytics & Decision Intelligence',
                desc: 'Real corporate data models, forecasting systems, and performance engines.',
              },
              {
                title: 'Full-Stack & Software Engineering',
                desc: 'Scalable applications, secure systems, and production-ready architecture.',
              },
              {
                title: 'Generative AI, LLMs & Automation',
                desc: 'Technologies redefining productivity, business, and decision systems.',
              },
              {
                title: 'Professional & Career Certifications',
                desc: 'Credentials aligned with real hiring ecosystems.',
              },
              {
                title: 'Real-World Industry Project Architecture',
                desc: 'Not demo projects — enterprise-grade problem solving.',
              },
              {
                title: 'Career Strategy, Placement & Readiness',
                desc: 'Interview mastery, portfolio authority, and market positioning.',
              },
            ].map((o, i) => (
              <div
                key={o.title}
                className="rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <h5 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                  {o.title}
                </h5>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* THE COMMITMENT */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-gray-900 via-gray-800 to-black">
          <div className="rounded-3xl bg-gray-900 text-white p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 ring-1 ring-white/10 mb-4">
              <span className="text-xs font-semibold">✦ THE AIVANU COMMITMENT</span>
            </div>
            <p className="text-white/90 text-lg font-semibold">We do not promise shortcuts.</p>
            <p className="text-white/90 text-lg font-semibold">We do not promise ease.</p>
            <p className="text-white/90 text-lg font-semibold">We do not promise comfort.</p>
            <p className="mt-3 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
              We promise elevation.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed max-w-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              If you enter AIVANU with ambition — you leave with capability, authority, and career leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


