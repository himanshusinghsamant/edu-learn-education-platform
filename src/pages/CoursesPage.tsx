import { Container, Title, Text, Grid, Group, Badge } from '@mantine/core';
import { Header } from '../components/Header';
import { CourseCard } from '../components/CourseCard';
import type { Course } from '../types/index.js';

// Mock data for courses
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Development Course',
    description: 'Learn React from scratch with modern hooks, context, and best practices. Build real-world projects.',
    instructor: 'John Doe',
    price: 99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Masterclass',
    description: 'Master TypeScript advanced features, generics, decorators, and enterprise patterns.',
    instructor: 'Jane Smith',
    price: 149,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
    category: 'Programming',
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn design principles, user research, wireframing, and prototyping with modern tools.',
    instructor: 'Mike Johnson',
    price: 79,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop',
    category: 'Design',
  },
  {
    id: '4',
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
    instructor: 'Sarah Wilson',
    price: 129,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
    category: 'Backend',
  },
  {
    id: '5',
    title: 'Python Data Science Bootcamp',
    description: 'Master Python for data analysis, machine learning, and visualization.',
    instructor: 'David Brown',
    price: 199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    category: 'Data Science',
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile apps using React Native and modern development tools.',
    instructor: 'Lisa Davis',
    price: 179,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    category: 'Mobile',
  },
  {
    id: '7',
    title: 'Machine Learning with Python',
    description: 'Comprehensive course on machine learning algorithms, data preprocessing, and model deployment.',
    instructor: 'Alex Chen',
    price: 249,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
    category: 'AI/ML',
  },
  {
    id: '8',
    title: 'DevOps and Cloud Computing',
    description: 'Learn Docker, Kubernetes, AWS, and modern DevOps practices for scalable applications.',
    instructor: 'Maria Garcia',
    price: 189,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop',
    category: 'DevOps',
  },
  {
    id: '9',
    title: 'Blockchain Development',
    description: 'Build decentralized applications using Ethereum, Solidity, and Web3 technologies.',
    instructor: 'James Wilson',
    price: 299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    category: 'Blockchain',
  },
];

export const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Container size="xl" className="relative z-10">
          <div className="text-center text-white">
            <Title order={1} size="4rem" className="mb-6 font-display font-bold animate-fade-in">
              All Courses
            </Title>
            <Text size="xl" className="mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our comprehensive collection of courses designed to help you master new skills and advance your career
            </Text>
            <Group justify="center" gap="md" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Badge size="lg" variant="light" color="white">
                {mockCourses.length} Courses Available
              </Badge>
              <Badge size="lg" variant="light" color="white">
                Expert Instructors
              </Badge>
              <Badge size="lg" variant="light" color="white">
                Lifetime Access
              </Badge>
            </Group>
          </div>
        </Container>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <Container size="xl">
          <Grid>
            {mockCourses.map((course, index) => (
              <Grid.Col 
                key={course.id} 
                span={{ base: 12, sm: 6, lg: 4 }}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <CourseCard course={course} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};
