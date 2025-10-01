import React from 'react';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const HeroCodecademy: React.FC = () => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + subtle dots */}
      <div className="absolute inset-0 -z-10 bg-secondary-900" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_10%_10%,_rgba(255,255,255,0.12)_1px,_transparent_1px)] [background-size:14px_14px]" />

      <div className="mx-auto max-w-full py-8 lg:py-0">
        {/* Image (Carousel) with overlay headline */}
        <div className="relative overflow-hidden shadow-2xl ring-1 ring-white/10">
          <Slider {...sliderSettings} className="w-full">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
                alt="People collaborating and learning"
                className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover"
              />
            </div>
            {/* <div>
              <img
                src="https://images.unsplash.com/photo-1529336953121-4f3f6f1f4a49?q=80&w=1600&auto=format&fit=crop"
                alt="Team at work"
                className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover"
              />
            </div> */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Learning session"
                className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
                alt="People collaborating and learning"
                className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Learning session"
                className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover"
              />
            </div>
          </Slider>

          {/* Overlay chips */}
          <div className="absolute left-6 sm:left-10 top-10 sm:top-12 space-y-3">
            <span className="inline-block rounded-2xl bg-black px-4 sm:px-6 py-2 sm:py-3 text-3xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-white shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset]">
              Develop your
            </span>
            <br />
            <span className="inline-block rounded-2xl bg-black px-4 sm:px-6 py-2 sm:py-3 text-3xl sm:text-5xl lg:text-[72px] font-extrabold tracking-tight text-sky-300 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] min-h-[60px] sm:min-h-[80px] lg:min-h-[90px] flex items-center">
              <TypeAnimation
                sequence={[
                  'Decode Your Feature',
                  2000,
                  'Program Your Path',
                  2000,
                  'Think Future, Think Data',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
                cursor={true}
                style={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  color: 'inherit',
                  display: 'inline-block'
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


