import React from 'react';
import { Container, Title, Text } from '@mantine/core';

export const GovernmentPage: React.FC = () => {
  const governmentTechnologies = [
    { name: 'Digital Government', description: 'E-government services and digital citizen engagement platforms' },
    { name: 'Smart Cities', description: 'IoT sensors and AI for urban planning and infrastructure management' },
    { name: 'Public Safety', description: 'Predictive policing and emergency response optimization systems' },
    { name: 'Policy Analytics', description: 'Data-driven policy making and impact assessment tools' },
    { name: 'Cybersecurity', description: 'National security and critical infrastructure protection systems' },
    { name: 'Open Data', description: 'Transparent government data sharing and citizen access platforms' }
  ];

  const useCases = [
    {
      title: 'Smart City Management',
      description: 'AI-powered systems optimize traffic flow, manage utilities, and improve urban planning through real-time data analysis.',
      icon: '🏙️'
    },
    {
      title: 'Public Safety',
      description: 'Predictive analytics help law enforcement agencies prevent crime and respond more effectively to emergencies.',
      icon: '🚔'
    },
    {
      title: 'Citizen Services',
      description: 'Digital platforms streamline government services, reducing wait times and improving citizen satisfaction.',
      icon: '📱'
    },
    {
      title: 'Policy Making',
      description: 'Data analytics inform evidence-based policy decisions, improving outcomes for citizens and communities.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">🏛️</span>
              <Title 
                order={1} 
                size="3rem" 
                className="font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Government
              </Title>
            </div>
            <Text 
              size="xl" 
              className="text-gray-600 mx-auto max-w-3xl leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Transforming public services through digital innovation, data-driven governance, and citizen-centric solutions. 
              Explore how technology is modernizing government operations and improving public outcomes.
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
              Advanced technologies modernizing government operations
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
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
              How AI and data science are transforming government services
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-blue-600">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-6 font-display font-bold text-white"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Modernize Government Services
            </Title>
            <Text 
              size="lg" 
              className="text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Learn to build digital government solutions that improve citizen services and make government more efficient and transparent.
            </Text>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Start Learning GovTech
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
