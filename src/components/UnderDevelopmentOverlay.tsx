import { Container, Text, Stack } from '@mantine/core';
import { IconTools, IconClock } from '@tabler/icons-react';

export const UnderDevelopmentOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px',
            animation: 'slide 20s linear infinite'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Container size="md" className="relative z-10 text-center bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/20">
        <Stack align="center" gap="xl">
          {/* Main Icon */}
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
              <IconTools size={40} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <IconClock size={16} className="text-gray-800" />
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <Text 
              size="4rem" 
              fw={900} 
              className="text-white mb-4 font-display leading-tight"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            >
              Website Under
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Development
              </span>
            </Text>
            
            <Text 
              size="xl" 
              styles={{
                root: {
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: 'white'
                }
              }}
              className=" mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              We're working hard to bring you an amazing experience. 
              Our website is currently under construction and will be launching soon!
            </Text>
          </div>

        
          {/* Progress Indicator */}
          <div className="w-full max-w-md mt-8">
            <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', color: 'yellow' }} size="sm" className="text-white/70 mb-2 font-medium">
              Development Progress
            </Text>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '65%' }}
              />
            </div>
            <Text style={{ fontFamily: 'Inter, system-ui, sans-serif', color: 'yellow' }} size="xs" className=" mt-2 font-bold px-2 py-1 rounded">
              75% Complete
            </Text>
          </div>

       
        </Stack>
      </Container>

    </div>
  );
};
