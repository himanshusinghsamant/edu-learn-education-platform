import { Container, Title, Text, Grid, TextInput, Textarea, Button, Stack } from '@mantine/core';
import { Header } from '../components/Header';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Container size="xl" className="relative z-10">
          <div className="text-center text-white">
            <Title order={1} size="4rem" className="mb-6 font-display font-bold animate-fade-in">
              Contact Us
            </Title>
            <Text size="xl" className="mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get in touch with our team. We'd love to hear from you!
            </Text>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <div className="animate-fade-in">
                <Title order={2} size="2.5rem" className="mb-6 font-display font-bold text-secondary-800">
                  Send us a Message
                </Title>
                <Text size="lg" className="mb-8 text-secondary-600">
                  Have a question or need help? Fill out the form and we'll get back to you within 24 hours.
                </Text>

                <form className="space-y-6">
                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label="First Name"
                        placeholder="Enter your first name"
                        size="md"
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
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Last Name"
                        placeholder="Enter your last name"
                        size="md"
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
                      />
                    </Grid.Col>
                  </Grid>

                  <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    size="md"
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
                  />

                  <TextInput
                    label="Subject"
                    placeholder="What's this about?"
                    size="md"
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
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    size="md"
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
                  />

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Title order={3} size="xl" className="mb-6 font-display font-bold text-secondary-800">
                  Get in Touch
                </Title>
                
                <Stack gap="lg">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                    <Title order={4} size="lg" className="mb-2 font-display font-bold text-primary-600">
                      Email Us
                    </Title>
                    <Text className="text-secondary-600">
                      support@edulearn.com
                    </Text>
                    <Text size="sm" c="dimmed">
                      We'll respond within 24 hours
                    </Text>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                    <Title order={4} size="lg" className="mb-2 font-display font-bold text-primary-600">
                      Call Us
                    </Title>
                    <Text className="text-secondary-600">
                      +1 (555) 123-4567
                    </Text>
                    <Text size="sm" c="dimmed">
                      Mon-Fri 9AM-6PM EST
                    </Text>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                    <Title order={4} size="lg" className="mb-2 font-display font-bold text-primary-600">
                      Visit Us
                    </Title>
                    <Text className="text-secondary-600">
                      123 Education Street<br />
                      Learning City, LC 12345
                    </Text>
                    <Text size="sm" c="dimmed">
                      Come say hello!
                    </Text>
                  </div>
                </Stack>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </div>
  );
};
