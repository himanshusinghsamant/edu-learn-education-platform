import React from 'react';
import { Container, Title, Text } from '@mantine/core';

export const EnergyPage: React.FC = () => {
  const energyTechnologies = [
    { name: 'Smart Grids', description: 'Intelligent energy distribution networks with real-time optimization' },
    { name: 'Renewable Energy', description: 'Solar, wind, and hydro power management and forecasting systems' },
    { name: 'Energy Storage', description: 'Battery optimization and grid-scale energy storage solutions' },
    { name: 'Carbon Capture', description: 'AI-driven systems for monitoring and reducing carbon emissions' },
    { name: 'Energy Trading', description: 'Algorithmic trading of energy commodities and carbon credits' },
    { name: 'IoT Sensors', description: 'Connected devices for monitoring energy consumption and efficiency' }
  ];

  const useCases = [
    {
      title: 'Smart Grid Management',
      description: 'AI algorithms optimize energy distribution, predict demand patterns, and prevent power outages through intelligent grid management.',
      icon: '⚡'
    },
    {
      title: 'Renewable Energy Forecasting',
      description: 'Machine learning models predict solar and wind energy production to optimize grid integration and energy trading.',
      icon: '🌱'
    },
    {
      title: 'Energy Efficiency',
      description: 'IoT sensors and AI systems monitor and optimize energy consumption in buildings, factories, and transportation systems.',
      icon: '🔋'
    },
    {
      title: 'Carbon Footprint Tracking',
      description: 'Data analytics track and reduce carbon emissions across supply chains, helping organizations meet sustainability goals.',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">⚡</span>
              <Title 
                order={1} 
                size="3rem" 
                className="font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Energy
              </Title>
            </div>
            <Text 
              size="xl" 
              className="text-gray-600 mx-auto max-w-3xl leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Powering the future with smart energy systems, renewable technologies, and sustainable solutions. 
              Discover how AI and data science are transforming the energy sector for a greener tomorrow.
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
              Advanced technologies driving the energy revolution
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {energyTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
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
              How AI and data science are revolutionizing energy systems
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-500 to-orange-500">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-6 font-display font-bold text-white"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Power the Energy Revolution
            </Title>
            <Text 
              size="lg" 
              className="text-yellow-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Learn to build intelligent energy systems and contribute to a sustainable future powered by clean technology.
            </Text>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Start Learning Energy Tech
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
