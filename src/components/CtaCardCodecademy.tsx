import React from 'react';

export const CtaCardCodecademy: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-16">
        <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-sky-500 via-purple-500 to-fuchsia-500 shadow-2xl ring-1 ring-white/10">
          <div className="relative rounded-3xl bg-black text-white px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            {/* Decorative glows */}
            <span className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                  style={{ fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}
                >
                  Build skills for the AI era
                </h2>
                <p
                  className="mt-3 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}
                >
                  Elevate your learning and unlock powerful possibilities by mastering high‑impact skills in
                  <span className="text-white font-semibold"> AI</span>,{' '}
                  <span className="text-white font-semibold">Machine Learning</span>,{' '}
                  <span className="text-white font-semibold">Data Science</span> and more.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold shadow-md hover:bg-gray-100 transition"
                  style={{ fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}
                >
                  Start learning
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent text-white px-4 py-3 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold hover:bg-white/10 transition"
                  style={{ fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}
                >
                  Explore tracks
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


