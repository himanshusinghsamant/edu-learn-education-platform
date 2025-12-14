import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const techImages = [
  { name: 'Excel', image: '/tech-images/1. excel.png' },
  { name: 'Python', image: '/tech-images/2. Python.png' },
  { name: 'SQL', image: '/tech-images/3. SQL.png' },
  { name: 'Power BI', image: '/tech-images/4. Power BI.png' },
  { name: 'Tableau', image: '/tech-images/5. Tableau.png' },
  { name: 'Statistics', image: '/tech-images/6. Stastics.png' },
  { name: 'Machine Learning', image: '/tech-images/7. ML.png' },
  { name: 'Artificial Intelligence', image: '/tech-images/8. AI.png' },
  { name: 'Generative AI', image: '/tech-images/9. Gen AI.png' },
  { name: 'NLP', image: '/tech-images/10. NLP.png' },
  { name: 'Computer Vision', image: '/tech-images/11. Computer Vision.png' },
  { name: 'AWS', image: '/tech-images/12. AWS.png' },
  { name: 'Google Cloud', image: '/tech-images/13. GCP.png' },
  { name: 'Azure', image: '/tech-images/14. Azur.png' },
  { name: 'Pipelines', image: '/tech-images/15. Piplines.png' },
  { name: 'GitHub', image: '/tech-images/16. Github.png' },
  { name: 'ETL', image: '/tech-images/17. ETL.png' },
  { name: 'Big Data', image: '/tech-images/18. Bigdata.jpg' },
  { name: 'Linux', image: '/tech-images/19. Linux.png' },
  { name: 'Snowflake', image: '/tech-images/20. Snowflake.png' },
  { name: 'Deep Learning', image: '/tech-images/21. Deep Learning.png' },
  { name: 'ChatGPT', image: '/tech-images/22. ChatGPT-removebg.png' },
  { name: 'Docker', image: '/tech-images/23. Docker.png' },
  { name: 'Databricks', image: '/tech-images/24. databricks-removebg.png' },
  { name: 'R Programming', image: '/tech-images/25. R_Programing-removebg-preview.png' },
  { name: 'Data Warehouse', image: '/tech-images/26. Datware House.png' },
];

export const TechImagesSection: React.FC = () => {
  // Custom arrow components
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    swipeToSlide: true,
    touchThreshold: 12,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white md:py-[100px]">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Title
            order={2}
            size="2.5rem"
            className="mb-4 font-display font-bold text-gray-900"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
          >
            Master In-Demand
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </Title>
          <Text
            size="lg"
            className="text-gray-600 mx-auto leading-relaxed font-medium"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Learn the most sought-after skills in data science, AI, Machine Learning, and more
          </Text>
        </div>

        {/* Tech Images Slider */}
        <div className="relative overflow-hidden">
          <Slider {...sliderSettings} className="tech-slider">
            {techImages.map((tech, index) => (
              <div key={tech.name} className="px-2">
                <div
                  className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Image Container */}
                  <div className="aspect-square relative overflow-hidden rounded-xl mb-3">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>

                  {/* Tech Name */}
                  <Text
                    size="xs"
                    className="text-center font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {tech.name}
                  </Text>
                </div>
              </div>
            ))}
          </Slider>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
          >
            Explore All Technologies

          </button>
          <p className="text-gray-600 text-sm mt-2">With AIVANU</p>
        </div>
      </Container>
    </section>
  );
};
