import { Container, Title, Text, Button, Group, Badge } from '@mantine/core';
import { HeroCodecademy } from '../components/HeroCodecademy';
import { CtaCardCodecademy } from '../components/CtaCardCodecademy';
import { TechImagesSection } from '../components/TechImagesSection';
import { AboutAivanuSection } from '../components/AboutAivanuSection';
// import type { Course } from '../types/index.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Mock data for courses
// const mockCourses: Course[] = [
//   {
//     id: '1',
//     title: 'Complete React Development Course',
//     description: 'Learn React from scratch with modern hooks, context, and best practices. Build real-world projects.',
//     instructor: 'John Doe',
//     price: 99,
//     rating: 4.8,
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
//     category: 'Web Development',
//   },
//   {
//     id: '2',
//     title: 'Advanced TypeScript Masterclass',
//     description: 'Master TypeScript advanced features, generics, decorators, and enterprise patterns.',
//     instructor: 'Jane Smith',
//     price: 149,
//     rating: 4.9,
//     image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
//     category: 'Programming',
//   },
//   {
//     id: '3',
//     title: 'UI/UX Design Fundamentals',
//     description: 'Learn design principles, user research, wireframing, and prototyping with modern tools.',
//     instructor: 'Mike Johnson',
//     price: 79,
//     rating: 4.7,
//     image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop',
//     category: 'Design',
//   },
//   {
//     id: '4',
//     title: 'Node.js Backend Development',
//     description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
//     instructor: 'Sarah Wilson',
//     price: 129,
//     rating: 4.6,
//     image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
//     category: 'Backend',
//   },
//   {
//     id: '5',
//     title: 'Python Data Science Bootcamp',
//     description: 'Master Python for data analysis, machine learning, and visualization.',
//     instructor: 'David Brown',
//     price: 199,
//     rating: 4.9,
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
//     category: 'Data Science',
//   },
//   {
//     id: '6',
//     title: 'Mobile App Development with React Native',
//     description: 'Create cross-platform mobile apps using React Native and modern development tools.',
//     instructor: 'Lisa Davis',
//     price: 179,
//     rating: 4.8,
//     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
//     category: 'Mobile',
//   },
// ];

export const HomePage = () => {
  // Generate array of institute images from public folder
  const rightImages = Array.from({ length: 10 }, (_, i) => `/institute-images/img-${i + 1}.jpg`);

  const rightSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    fade: true
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">


        <div id="hero" className='relative mb-14'>
          <HeroCodecademy />
          <div className='absolute -bottom-20 left-0 w-full'>
            <CtaCardCodecademy />
          </div>
        </div>

        {/* Tech Images Section */}
       <div id="technologies">
       <TechImagesSection />
       </div>

        {/* Learning Model Section */}
        <section id="model" className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
          {/* Dark background with angled grid pattern */}
          <div className="absolute inset-0 bg-gray-900">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #374151 1px, transparent 1px),
                  linear-gradient(-45deg, #374151 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 0 20px'
              }}
            />
          </div>

          <Container size="xl" className="relative z-10 px-4 sm:px-6">
            {/* Main heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2">
                A learning model that powers career transformation
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left side - Cards */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                {/* Card 1 - Hands-on courses */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        Hands-on, Interactive Learning
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                        You don't just learn — you master. Every program is designed with immersive, hands-on training that mirrors elite industry environments, ensuring you gain real execution power, not just theoretical knowledge.
                      </p>
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]">
                        Explore Courses
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Real-world projects */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        Real-World Industry Projects
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-1.5">
                        <span className="text-white font-semibold">Build What Companies Actually Use.</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Work on real AI, Data Science, and Full-Stack projects inspired by real industry problems. Build a powerful portfolio that proves your skills, not just your certificates — and stand out to recruiters instantly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Certified professional */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        Global Certification & Placement Advantage
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-1.5">
                        <span className="text-white font-semibold">Certified for Top Roles. Chosen for Top Salaries.</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Earn industry-recognized certifications crafted for high-paying job profiles. Backed by placement guidance and career mentorship, our learners don't just get jobs — they step into premium career trajectories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Image Slider */}
              <div className="order-1 lg:order-2">
                <div className="w-full max-w-lg mx-auto lg:max-w-none sticky top-24">
                  <div className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <Slider {...rightSliderSettings} className="w-full">
                      {rightImages.map((src, idx) => (
                        <div key={idx} className="w-full">
                          <img
                            src={src}
                            alt={`Learning showcase ${idx + 1}`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Industry Tabs Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <Container size="xl" className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <Title
                order={2}
                size="2.5rem"
                className="mb-4 font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Explore by Industry
              </Title>
              <Text
                size="lg"
                className="text-gray-600 mx-auto text-center leading-relaxed font-medium"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
               Understand how top industries hire, pay, and grow AI & Data Science professionals — and prepare yourself for those exact high-impact roles.
              </Text>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 lg:gap-6">
              {[
                { name: 'Healthcare', icon: '🏥', path: '/healthcare' },
                { name: 'Finance', icon: '💰', path: '/finance' },
                { name: 'Technology', icon: '💻', path: '/technology' },
                { name: 'Energy', icon: '⚡', path: '/energy' },
                { name: 'Government', icon: '🏛️', path: '/government' }
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 min-w-[160px] justify-center"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <Text
                    size="sm"
                    className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {industry.name}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Hero Section */}
        <section id="career" className="relative overflow-hidden py-24 lg:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 animate-gradient-x" />
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />

          <Container size="xl" className="relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <Badge
                size="lg"
                variant="light"
                color="white"
                className="mb-8 animate-fade-in shadow-glow"
              >
                ✦ Global Standards in Advanced Tech Education
              </Badge>

              <Title
                order={1}
                size="5rem"
                className="mb-8 font-display font-bold text-white animate-slide-up leading-tight"
              >
                Build the Future.
                <span className="block">
                  Live the{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    Premium Career
                  </span>
                  .
                </span>
              </Title>

              <Text
                size="xl"
                className="mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                AIVANU is a refined learning ecosystem for ambitious minds — where elite skills in AI, Data Science, and Future Technologies are shaped through precision training, real-world mastery, and career-focused mentorship.
              </Text>

              <Group
                justify="center"
                gap="lg"
                className="animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <Button
                  size="xl"
                  variant="white"
                  color="primary"
                  className="bg-white hover:bg-gray-50 text-primary-600 font-semibold shadow-glow-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                >
                  Begin Your Elevation
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  color="white"
                  className="border-2 border-white/30 hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore AIVANU
                </Button>
              </Group>

              {/* Trust Indicators */}
              <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Text size="sm" className="text-white/70 mb-6 font-medium">
                  Chosen by thousands of driven learners preparing for high-impact technology careers.
                </Text>
                <Group justify="center" gap="xl" className="opacity-60">
                  <Text className="text-white font-semibold">Google</Text>
                  <Text className="text-white font-semibold">Microsoft</Text>
                  <Text className="text-white font-semibold">IBM</Text>
                  <Text className="text-white font-semibold">Meta</Text>
                  <Text className="text-white font-semibold">Amazon</Text>
                </Group>
              </div>
            </div>
          </Container>
        </section>

        {/* About AIVANU - inserted below hero */}
        <div id="about">
        <AboutAivanuSection />
        </div>

        {/* Stats Section */}
        {/* <section id="stats" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <Container size="xl" className="relative z-10">
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="text-center text-white animate-fade-in">
                  <Title order={2} size="4rem" className="mb-4 font-display font-bold">
                    5,000+
                  </Title>
                  <Text size="xl" className="opacity-90 font-medium">
                    Online Courses
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Title order={2} size="4rem" className="mb-4 font-display font-bold">
                    50M+
                  </Title>
                  <Text size="xl" className="opacity-90 font-medium">
                    Students Enrolled
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Title order={2} size="4rem" className="mb-4 font-display font-bold">
                    200+
                  </Title>
                  <Text size="xl" className="opacity-90 font-medium">
                    Countries
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </section> */}

      </div>
    </div>
  );
};
