import React from 'react';

export const CtaCardCodecademy: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-16">
        <div className="grid gap-6 md:grid-cols-2 rounded-2xl bg-black text-white shadow-2xl ring-1 ring-white/10 p-4 sm:p-5 lg:p-6">
          {/* Left: Google sign up + more ways */}
          <div className="flex flex-col gap-2">
            <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white text-gray-900 px-4 py-3 text-md font-semibold shadow-sm hover:bg-gray-50 transition cursor-pointer">
              <img
                alt="Google"
                className="h-5 w-5"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
              />
              Sign up with Google
            </button>
            <div className="text-center text-white/50 text-xs">OR</div>
            <button className="inline-flex items-center justify-center rounded-xl bg-yellow-300 px-4 py-3 text-md font-semibold text-black hover:bg-yellow-400 transition cursor-pointer">
              More ways to sign up
            </button>
          </div>

          {/* Right: Text */}
          <div className="text-white">
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              Grow in your career and unlock new opportunities by learning in-demand skills in AI,
              data, coding, cybersecurity, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


