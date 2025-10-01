import { Container, Title, Text, Grid, Avatar } from '@mantine/core';
import { Header } from '../components/Header';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Container size="xl" className="relative z-10">
          <div className="text-center text-white">
            <Title order={1} size="4rem" className="mb-6 font-display font-bold animate-fade-in">
              About EduLearn
            </Title>
            <Text size="xl" className="mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empowering learners worldwide with high-quality education and cutting-edge technology
            </Text>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <div className="animate-fade-in">
                <Title order={2} size="2.5rem" className="mb-6 font-display font-bold text-secondary-800">
                  Our Mission
                </Title>
                <Text size="lg" className="mb-6 text-secondary-600 leading-relaxed">
                  We believe that education should be accessible, engaging, and transformative. 
                  Our mission is to democratize learning by providing world-class education 
                  to anyone, anywhere, at any time.
                </Text>
                <Text size="lg" className="text-secondary-600 leading-relaxed">
                  Through innovative technology, expert instructors, and a commitment to excellence, 
                  we're building a global community of lifelong learners.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Title order={3} size="xl" className="mb-4 font-display font-bold">
                  Why Choose EduLearn?
                </Title>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <Text>Expert instructors from top companies</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <Text>Hands-on projects and real-world applications</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <Text>Flexible learning schedules</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <Text>Industry-recognized certificates</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <Text>Lifetime access to course materials</Text>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <Container size="xl">
          <div className="text-center mb-16 animate-fade-in">
            <Title order={2} size="2.5rem" className="mb-6 font-display font-bold text-secondary-800">
              Meet Our Team
            </Title>
            <Text size="lg" className="text-secondary-600 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your success
            </Text>
          </div>

          <Grid>
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', avatar: 'SJ' },
              { name: 'Michael Chen', role: 'CTO', avatar: 'MC' },
              { name: 'Emily Rodriguez', role: 'Head of Education', avatar: 'ER' },
              { name: 'David Kim', role: 'Lead Instructor', avatar: 'DK' },
            ].map((member, index) => (
              <Grid.Col key={member.name} span={{ base: 12, sm: 6, lg: 3 }}>
                <div className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Avatar size="xl" color="primary" radius="xl" className="mx-auto mb-4">
                    {member.avatar}
                  </Avatar>
                  <Title order={4} size="lg" className="mb-2 font-display font-bold text-secondary-800">
                    {member.name}
                  </Title>
                  <Text c="dimmed" className="font-medium">
                    {member.role}
                  </Text>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <div className="text-center text-white animate-fade-in">
                <Title order={2} size="3rem" className="mb-2 font-display font-bold">
                  50M+
                </Title>
                <Text size="lg" className="opacity-90">
                  Students
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Title order={2} size="3rem" className="mb-2 font-display font-bold">
                  5,000+
                </Title>
                <Text size="lg" className="opacity-90">
                  Courses
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Title order={2} size="3rem" className="mb-2 font-display font-bold">
                  200+
                </Title>
                <Text size="lg" className="opacity-90">
                  Countries
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <div className="text-center text-white animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Title order={2} size="3rem" className="mb-2 font-display font-bold">
                  98%
                </Title>
                <Text size="lg" className="opacity-90">
                  Satisfaction
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </div>
  );
};
