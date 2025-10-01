import React from 'react';
import { Container, Title, Text } from '@mantine/core';

export const HealthcarePage: React.FC = () => {
  const healthcareTechnologies = [
    { name: 'Medical Imaging AI', description: 'AI-powered diagnostic imaging for faster and more accurate diagnoses' },
    { name: 'Electronic Health Records', description: 'Digital patient records management and analysis' },
    { name: 'Drug Discovery', description: 'Machine learning for pharmaceutical research and development' },
    { name: 'Telemedicine', description: 'Remote healthcare delivery and patient monitoring' },
    { name: 'Predictive Analytics', description: 'Early disease detection and patient outcome prediction' },
    { name: 'Genomics', description: 'Personalized medicine based on genetic analysis' }
  ];

  const useCases = [
    {
      title: 'Medical Diagnosis',
      description: 'AI algorithms analyze medical images to detect diseases like cancer, fractures, and neurological conditions with high accuracy.',
      icon: '🔬'
    },
    {
      title: 'Drug Development',
      description: 'Machine learning accelerates drug discovery by predicting molecular behavior and identifying potential treatments.',
      icon: '💊'
    },
    {
      title: 'Patient Monitoring',
      description: 'IoT devices and AI systems continuously monitor patient vitals and alert healthcare providers to critical changes.',
      icon: '📊'
    },
    {
      title: 'Personalized Treatment',
      description: 'Genomic analysis and AI create customized treatment plans based on individual patient characteristics.',
      icon: '🧬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">🏥</span>
              <Title 
                order={1} 
                size="3rem" 
                className="font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Healthcare
              </Title>
            </div>
            <Text 
              size="xl" 
              className="text-gray-600 mx-auto max-w-3xl leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Transforming healthcare through artificial intelligence, data science, and digital innovation. 
              Discover how technology is revolutionizing patient care, medical research, and healthcare delivery.
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
              Cutting-edge technologies driving innovation in healthcare
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
              How AI and data science are being applied in healthcare today
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-6 font-display font-bold text-white"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Ready to Transform Healthcare?
            </Title>
            <Text 
              size="lg" 
              className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Join thousands of healthcare professionals learning to leverage AI and data science for better patient outcomes.
            </Text>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Start Learning Healthcare AI
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
