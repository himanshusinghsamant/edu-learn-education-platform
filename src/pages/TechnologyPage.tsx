import React from 'react';
import { Container, Title, Text } from '@mantine/core';

export const TechnologyPage: React.FC = () => {
  const techTechnologies = [
    { name: 'Cloud Computing', description: 'Scalable infrastructure and services for modern applications' },
    { name: 'DevOps & CI/CD', description: 'Automated development, testing, and deployment pipelines' },
    { name: 'Cybersecurity', description: 'AI-powered threat detection and security automation' },
    { name: 'IoT & Edge Computing', description: 'Connected devices and distributed computing systems' },
    { name: 'Quantum Computing', description: 'Next-generation computing for complex problem solving' },
    { name: 'AR/VR', description: 'Immersive technologies for training, design, and entertainment' }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'AI-assisted coding, automated testing, and intelligent code review systems that accelerate development cycles.',
      icon: '💻'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Automated scaling, resource optimization, and intelligent monitoring of cloud-based applications and services.',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Machine learning algorithms detect and prevent cyber threats in real-time, protecting digital assets and data.',
      icon: '🔒'
    },
    {
      title: 'Product Innovation',
      description: 'Data-driven product development using user analytics, A/B testing, and predictive modeling for better outcomes.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">💻</span>
              <Title 
                order={1} 
                size="3rem" 
                className="font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Technology
              </Title>
            </div>
            <Text 
              size="xl" 
              className="text-gray-600 mx-auto max-w-3xl leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Driving innovation in software development, cloud computing, and digital transformation. 
              Explore how cutting-edge technologies are reshaping the tech industry and creating new possibilities.
            </Text>
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-4 font-display font-bold text-gray-900"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Key Technologies
            </Title>
            <Text 
              size="lg" 
              className="text-gray-600 mx-auto max-w-2xl leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Emerging technologies shaping the future of software and digital systems
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                <Text 
                  size="sm" 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {tech.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-4 font-display font-bold text-gray-900"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Real-World Applications
            </Title>
            <Text 
              size="lg" 
              className="text-gray-600 mx-auto max-w-2xl leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              How AI and data science are revolutionizing technology development
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{useCase.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <Text 
                      size="sm" 
                      className="text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {useCase.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-6 font-display font-bold text-white"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Build the Future of Technology
            </Title>
            <Text 
              size="lg" 
              className="text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Master the technologies that are shaping tomorrow's digital landscape and become a leader in tech innovation.
            </Text>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Start Learning Tech Innovation
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
