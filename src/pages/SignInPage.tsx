import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Stack,
  Anchor,
  Center,
  Group,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { type SignInFormData } from '../types/index.js';

export const SignInPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignInFormData>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifications.show({
        title: 'Success!',
        message: 'You have been signed in successfully.',
        color: 'green',
      });
      
      navigate('/');
    } catch (error) {
      notifications.show({
        title: `Error: ${error}`,
        message: 'Failed to sign in. Please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <Container size="sm" className="relative z-10">
        <Center>
          <Paper 
            shadow="large" 
            p="xl" 
            className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 animate-slide-up"
            radius="xl"
          >
            <Stack gap="xl">
              {/* Header */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-white font-display font-bold text-2xl">E</span>
                </div>
                <Title order={2} className="text-3xl font-display font-bold text-secondary-800 mb-2">
                  Welcome back
                </Title>
                <Text c="dimmed" size="lg" className="font-medium">
                  Sign in to your account
                </Text>
              </div>

              {/* Form */}
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="lg">
                  <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    required
                    size="md"
                    className="animate-fade-in"
                    styles={{
                      input: {
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease',
                        '&:focus': {
                          borderColor: '#3b82f6',
                          boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('email')}
                  />

                  <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    required
                    size="md"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.1s' }}
                    styles={{
                      input: {
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease',
                        '&:focus': {
                          borderColor: '#3b82f6',
                          boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('password')}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    loading={loading}
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 font-semibold animate-fade-in"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </form>

              {/* Divider */}
              <Divider 
                label="or" 
                labelPosition="center" 
                className="animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              />

              {/* Social Login */}
              <Stack gap="md" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  className="border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 font-medium"
                >
                  <Group gap="sm">
                    <div className="w-5 h-5 bg-red-500 rounded-full" />
                    Continue with Google
                  </Group>
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  className="border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 font-medium"
                >
                  <Group gap="sm">
                    <div className="w-5 h-5 bg-blue-500 rounded-full" />
                    Continue with Facebook
                  </Group>
                </Button>
              </Stack>

              {/* Footer */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Text size="sm" c="dimmed" className="font-medium">
                  Don't have an account?{' '}
                  <Anchor 
                    component={Link} 
                    to="/signup" 
                    size="sm"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                  >
                    Sign up
                  </Anchor>
                </Text>
              </div>
            </Stack>
          </Paper>
        </Center>
      </Container>
    </div>
  );
};
