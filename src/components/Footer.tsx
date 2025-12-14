import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between gap-6 flex-col sm:flex-row">
          {/* Logo + brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/Aivanu_logo.png"
              alt="AIVANU"
              className="w-10 h-10 rounded-full group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-extrabold tracking-tight">AIVANU</span>
          </a>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <a href="#technologies" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Technologies</a>
            <a href="#model" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Learning Model</a>
            <a href="#career" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Career</a>
            <a href="#about" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">About</a>
          </nav>

          {/* Copyright */}
          <Text c="dimmed" size="sm" className="text-white/60 text-center sm:text-right">
            © {new Date().getFullYear()} AIVANU. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
};


