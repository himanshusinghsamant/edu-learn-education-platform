import React from 'react';
import { Container, Title, Text } from '@mantine/core';

export const FinancePage: React.FC = () => {
  const financeTechnologies = [
    { name: 'Algorithmic Trading', description: 'AI-driven trading strategies and automated market analysis' },
    { name: 'Risk Management', description: 'Predictive models for credit risk and market volatility assessment' },
    { name: 'Fraud Detection', description: 'Machine learning systems to identify and prevent fraudulent transactions' },
    { name: 'Robo-Advisors', description: 'Automated investment management and portfolio optimization' },
    { name: 'Blockchain', description: 'Cryptocurrency and decentralized finance applications' },
    { name: 'RegTech', description: 'Regulatory technology for compliance and reporting automation' }
  ];

  const useCases = [
    {
      title: 'High-Frequency Trading',
      description: 'AI algorithms execute trades in milliseconds, analyzing market patterns and executing strategies faster than human traders.',
      icon: '📈'
    },
    {
      title: 'Credit Scoring',
      description: 'Machine learning models assess creditworthiness using alternative data sources beyond traditional credit reports.',
      icon: '💳'
    },
    {
      title: 'Anti-Money Laundering',
      description: 'AI systems detect suspicious transaction patterns and flag potential money laundering activities in real-time.',
      icon: '🛡️'
    },
    {
      title: 'Personalized Banking',
      description: 'Data analytics create customized financial products and services tailored to individual customer needs.',
      icon: '🏦'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-6xl">💰</span>
              <Title 
                order={1} 
                size="3rem" 
                className="font-display font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
              >
                Finance
              </Title>
            </div>
            <Text 
              size="xl" 
              className="text-gray-600 mx-auto max-w-3xl leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Revolutionizing financial services through artificial intelligence, machine learning, and data analytics. 
              Explore how technology is transforming banking, trading, and financial decision-making.
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
              Advanced technologies driving innovation in financial services
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
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
              How AI and data science are transforming financial services
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
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <Container size="xl" className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title 
              order={2} 
              size="2.5rem" 
              className="mb-6 font-display font-bold text-white"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}
            >
              Master Financial Technology
            </Title>
            <Text 
              size="lg" 
              className="text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Learn to build AI-powered financial applications and algorithmic trading systems that drive the future of finance.
            </Text>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Start Learning FinTech
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};
