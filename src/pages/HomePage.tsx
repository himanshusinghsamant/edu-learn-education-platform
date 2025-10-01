import { Container, Title, Text, Button, Grid, Group, Badge } from '@mantine/core';
import { CourseCard } from '../components/CourseCard';
import { HeroCodecademy } from '../components/HeroCodecademy';
import { CtaCardCodecademy } from '../components/CtaCardCodecademy';
import { TechImagesSection } from '../components/TechImagesSection';
import type { Course } from '../types/index.js';

// Mock data for courses
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Development Course',
    description: 'Learn React from scratch with modern hooks, context, and best practices. Build real-world projects.',
    instructor: 'John Doe',
    price: 99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Masterclass',
    description: 'Master TypeScript advanced features, generics, decorators, and enterprise patterns.',
    instructor: 'Jane Smith',
    price: 149,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
    category: 'Programming',
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn design principles, user research, wireframing, and prototyping with modern tools.',
    instructor: 'Mike Johnson',
    price: 79,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop',
    category: 'Design',
  },
  {
    id: '4',
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
    instructor: 'Sarah Wilson',
    price: 129,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
    category: 'Backend',
  },
  {
    id: '5',
    title: 'Python Data Science Bootcamp',
    description: 'Master Python for data analysis, machine learning, and visualization.',
    instructor: 'David Brown',
    price: 199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    category: 'Data Science',
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile apps using React Native and modern development tools.',
    instructor: 'Lisa Davis',
    price: 179,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    category: 'Mobile',
  },
];

export const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">


        <div className='relative mb-14'>
          <HeroCodecademy />
          <div className='absolute -bottom-20 left-0 w-full'>
            <CtaCardCodecademy />
          </div>
        </div>

        {/* Tech Images Section */}
        <TechImagesSection />

        {/* Learning Model Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
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

          <Container size="xl" className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
              {/* Left side - Cards */}
              <div className="space-y-8">
                {/* Main heading */}
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    A learning model that powers career transformation
                  </h2>
                </div>

                {/* Card 1 - Hands-on courses */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Hands-on, interactive courses
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Short videos are broken up by interactive exercises. Practice new skills immediately to retain information
                      </p>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:scale-105">
                        Explore Courses
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Real-world projects */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Real-world projects
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Apply your learning in real situations, perfect for developing practical skills and building up your portfolio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Certified professional */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Become a certified professional
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Prove you're job-ready. Earn industry-leading certifications built around in-demand roles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Video mockup */}
              <div className="flex justify-center">
                <div className="relative w-full lg:h-[55vw] min-h-[600px]">
                  {/* Vertical Video Container */}
                  <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300  h-full flex flex-col">
                    {/* Video thumbnail mockup - vertical aspect ratio */}
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-600 to-gray-800 relative flex-1 overflow-hidden">
                      {/* Animated video content simulation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-pulse">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Simulated video content */}
                        <div className="absolute top-8 left-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 animate-pulse">
                            <div className="h-4 bg-white/30 rounded mb-2"></div>
                            <div className="h-3 bg-white/20 rounded w-3/4"></div>
                          </div>
                        </div>
                        
                        <div className="absolute top-32 left-4 right-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-pulse" style={{ animationDelay: '1s' }}>
                            <div className="h-6 bg-white/30 rounded mb-2"></div>
                            <div className="h-4 bg-white/20 rounded mb-2"></div>
                            <div className="h-4 bg-white/20 rounded w-1/2"></div>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-20 left-4 right-4">
                          <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 animate-pulse" style={{ animationDelay: '2s' }}>
                            <div className="h-5 bg-white/30 rounded mb-1"></div>
                            <div className="h-3 bg-white/20 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Autoplay indicator */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          LIVE
                        </div>
                      </div>
                      
                      {/* Video controls - showing playing state */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                              </svg>
                            </button>
                            <div className="flex-1">
                              <div className="text-white text-sm font-semibold">Interactive Learning</div>
                              <div className="text-gray-300 text-xs">2:45 / 15:30</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                              </button>
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Vertical video progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                        <div className="h-full bg-blue-500 w-1/4"></div>
                      </div>
                    </div>
                    
                    {/* Video info - positioned at bottom */}
                    <div className="p-6 bg-gray-800/50 backdrop-blur-sm">
                      <h4 className="text-white font-bold text-lg mb-2">Master React Development</h4>
                      <p className="text-gray-400 text-sm mb-4">Learn modern React patterns and build real-world applications</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">JD</span>
                          </div>
                          <span className="text-gray-300 text-sm">John Doe</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <span className="text-gray-300 text-sm">4.8</span>
                        </div>
                      </div>
                    </div>
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
                Discover how data science and AI are transforming different sectors
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
                <a
                  key={industry.name}
                  href={industry.path}
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
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32">
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
                🚀 New: AI-Powered Learning Paths
              </Badge>

              <Title
                order={1}
                size="5rem"
                className="mb-8 font-display font-bold text-white animate-slide-up leading-tight"
              >
                Learn Without
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Limits
                </span>
              </Title>

              <Text
                size="xl"
                className="mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                Start, switch, or advance your career with more than 5,000 courses,
                Professional Certificates, and degrees from world-class universities and companies.
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
                  Join for Free
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  color="white"
                  className="border-2 border-white/30 hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try for Business
                </Button>
              </Group>

              {/* Trust Indicators */}
              <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Text size="sm" className="text-white/70 mb-6 font-medium">
                  Trusted by over 50 million learners worldwide
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

        {/* Featured Courses Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <Container size="xl">
            <div className="text-center mb-16 animate-fade-in">
              <Badge size="lg" variant="light" color="primary" className="mb-6">
                ✨ Featured Courses
              </Badge>
              <Title
                order={2}
                size="3rem"
                className="mb-6 font-display font-bold text-secondary-800"
              >
                Discover Your Next
                <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Learning Adventure
                </span>
              </Title>
              <Text size="lg" c="dimmed" className="max-w-2xl mx-auto leading-relaxed">
                Hand-picked courses from industry experts to help you master new skills and advance your career
              </Text>
            </div>

            <Grid className="animate-slide-up">
              {mockCourses.map((course, index) => (
                <Grid.Col
                  key={course.id}
                  span={{ base: 12, sm: 6, lg: 4 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </Grid.Col>
              ))}
            </Grid>

            <div className="text-center mt-16 animate-fade-in">
              <Button
                size="xl"
                variant="outline"
                color="primary"
                className="border-2 hover:bg-primary-50 font-semibold transition-all duration-300 hover:scale-105"
              >
                View All Courses
              </Button>
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
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
        </section>

      </div>
    </div>
  );
};
