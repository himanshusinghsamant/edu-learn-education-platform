import { Container, Text, Group, ActionIcon } from '@mantine/core';
import { IconMail, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          {/* Logo + brand + Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src="/Aivanu_logo.png"
                alt="AIVANU"
                className="w-10 h-10 rounded-full group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-extrabold tracking-tight">AIVANU</span>
            </a>
            <Group gap="sm">
              <ActionIcon 
                component="a" 
                href="https://wa.me/918700094763" 
                target="_blank" 
                variant="subtle" 
                color="gray"
                className="hover:text-green-500 transition-colors"
              >
                <IconBrandWhatsapp size={20} />
              </ActionIcon>
              <ActionIcon 
                component="a" 
                href="mailto:team@aivanu.com" 
                variant="subtle" 
                color="gray"
                className="hover:text-blue-500 transition-colors"
              >
                <IconMail size={20} />
              </ActionIcon>
            </Group>
          </div>

          {/* Quick links & Contact Info */}
          <div className="flex flex-col items-center gap-6">
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
              <a href="#technologies" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Technologies</a>
              <a href="#model" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Learning Model</a>
              <a href="#career" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">Career</a>
              <a href="#about" className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300">About</a>
            </nav>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/70">
              <a href="mailto:team@aivanu.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <IconMail size={16} />
                <span>team@aivanu.com</span>
              </a>
              <a href="tel:8700094763" className="flex items-center gap-2 hover:text-white transition-colors">
                <IconPhone size={16} />
                <span>8700094763</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <Text c="dimmed" size="sm" className="text-white/60 text-center md:text-right max-w-[200px]">
            © {new Date().getFullYear()} AIVANU. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
};


