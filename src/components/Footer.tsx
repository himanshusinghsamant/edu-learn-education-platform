import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-5 rounded-sm bg-purple-600" />
            <span className="text-xl font-bold tracking-tight">udemy</span>
          </div>
          <Text c="dimmed" size="sm" className="text-gray-400">
            © {new Date().getFullYear()} Udemy clone demo. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
};


