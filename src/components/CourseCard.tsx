import { Card, Image, Text, Badge, Button, Group, Stack, Rating, Avatar } from '@mantine/core';
import type { Course } from '../types/index.js';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card 
      shadow="soft" 
      padding="xl" 
      radius="xl" 
      className="h-full bg-card-gradient hover:shadow-large transition-all duration-500 hover:scale-105 group cursor-pointer border-0"
    >
      <Card.Section className="relative overflow-hidden rounded-t-xl">
        <Image
          src={course.image}
          height={220}
          alt={course.title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          color="primary" 
          variant="filled"
          className="absolute top-4 right-4 shadow-glow"
          size="sm"
        >
          {course.category}
        </Badge>
      </Card.Section>

      <Stack gap="md" className="mt-6">
        <div>
          <Text 
            fw={600} 
            size="lg" 
            lineClamp={2}
            className="font-display text-secondary-800 group-hover:text-primary-600 transition-colors duration-300"
          >
            {course.title}
          </Text>
          <Text 
            size="sm" 
            c="dimmed" 
            lineClamp={2} 
            className="mt-2 leading-relaxed"
          >
            {course.description}
          </Text>
        </div>

        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Avatar size="sm" color="primary" radius="xl">
              {course.instructor.split(' ').map(n => n[0]).join('')}
            </Avatar>
            <Text size="sm" c="dimmed" className="font-medium">
              {course.instructor}
            </Text>
          </Group>
          <Group gap="xs" align="center">
            <Rating 
              value={course.rating} 
              readOnly 
              size="sm"
              color="yellow"
              className="opacity-80"
            />
            <Text size="xs" c="dimmed" className="font-medium">
              {course.rating}
            </Text>
          </Group>
        </Group>

        <Group justify="space-between" align="center" className="mt-4">
          <div>
            <Text 
              size="2xl" 
              fw={800} 
              className="font-display bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
            >
              ${course.price}
            </Text>
            <Text size="xs" c="dimmed" className="font-medium">
              One-time payment
            </Text>
          </div>
          <Button 
            variant="filled" 
            color="primary"
            size="md"
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 font-medium"
          >
            Enroll Now
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};
