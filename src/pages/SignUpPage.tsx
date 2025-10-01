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
  Checkbox,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { type SignUpFormData } from '../types/index.js';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignUpFormData>({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      username: (value) => (value.length < 3 ? 'Username must be at least 3 characters' : null),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifications.show({
        title: 'Success!',
        message: 'Your account has been created successfully.',
        color: 'green',
      });
      
      navigate('/signin');
    } catch (error) {
      notifications.show({
        title: `Error: ${error}`,
        message: 'Failed to create account. Please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-200/30 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
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
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-white font-display font-bold text-2xl">E</span>
                </div>
                <Title order={2} className="text-3xl font-display font-bold text-secondary-800 mb-2">
                  Create your account
                </Title>
                <Text c="dimmed" size="lg" className="font-medium">
                  Join us today and start learning
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
                          borderColor: '#d946ef',
                          boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('email')}
                  />

                  <TextInput
                    label="Username"
                    placeholder="Choose a username"
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
                          borderColor: '#d946ef',
                          boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('username')}
                  />

                  <PasswordInput
                    label="Password"
                    placeholder="Create a password"
                    required
                    size="md"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.2s' }}
                    styles={{
                      input: {
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease',
                        '&:focus': {
                          borderColor: '#d946ef',
                          boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('password')}
                  />

                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                    size="md"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                    styles={{
                      input: {
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease',
                        '&:focus': {
                          borderColor: '#d946ef',
                          boxShadow: '0 0 0 3px rgba(217, 70, 239, 0.1)',
                        }
                      }
                    }}
                    {...form.getInputProps('confirmPassword')}
                  />

                  <Checkbox
                    label="I agree to the Terms of Service and Privacy Policy"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.4s' }}
                    styles={{
                      label: {
                        fontSize: '14px',
                        color: '#64748b',
                      }
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    loading={loading}
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 font-semibold animate-fade-in"
                    style={{ animationDelay: '0.5s' }}
                  >
                    Create Account
                  </Button>
                </Stack>
              </form>

              {/* Divider */}
              <Divider 
                label="or" 
                labelPosition="center" 
                className="animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              />

              {/* Social Login */}
              <Stack gap="md" className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  className="border-2 border-gray-200 hover:border-accent-300 hover:bg-accent-50 transition-all duration-300 font-medium"
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
                  className="border-2 border-gray-200 hover:border-accent-300 hover:bg-accent-50 transition-all duration-300 font-medium"
                >
                  <Group gap="sm">
                    <div className="w-5 h-5 bg-blue-500 rounded-full" />
                    Continue with Facebook
                  </Group>
                </Button>
              </Stack>

              {/* Footer */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Text size="sm" c="dimmed" className="font-medium">
                  Already have an account?{' '}
                  <Anchor 
                    component={Link} 
                    to="/signin" 
                    size="sm"
                    className="text-accent-600 hover:text-accent-700 font-semibold transition-colors duration-300"
                  >
                    Sign in
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
