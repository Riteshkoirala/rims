import { Box, Typography, Grid, Card, CardContent, Avatar, Container, useTheme, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialsPage = () => {
  const theme = useTheme();

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Ram Sharma",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "RIMS School has provided an excellent learning environment for my child. The teachers are dedicated and the facilities are top-notch. I'm impressed with the school's focus on both academic excellence and character development."
    },
    {
      id: 2,
      name: "Sita Thapa",
      role: "Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "The teachers here are amazing! They make learning fun and engaging. I love the various extracurricular activities and the supportive environment that helps me grow both academically and personally."
    },
    {
      id: 3,
      name: "Hari Karki",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "As a parent, I appreciate the school's commitment to quality education. The regular communication and involvement opportunities make me feel connected to my child's education journey."
    },
    {
      id: 4,
      name: "Gita Tamang",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "The school's focus on practical learning and modern teaching methods has helped me understand concepts better. I'm grateful for the opportunities to participate in various competitions and events."
    },
    {
      id: 5,
      name: "Krishna Shrestha",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "The school's emphasis on discipline and values has helped shape my child's character positively. The teachers are approachable and always ready to help with any concerns."
    },
    {
      id: 6,
      name: "Anita Gurung",
      role: "Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      rating: 5,
      text: "I love the friendly atmosphere at RIMS School. The teachers are supportive and the school provides great opportunities for personal growth and development."
    }
  ];

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: '40vh', md: '50vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What People Say
            </Typography>
            <Typography variant="h5" sx={{ 
              fontFamily: 'Roboto, sans-serif',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              opacity: 0.9
            }}>
              Hear from our students and parents about their experiences at RIMS School
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Testimonials Grid Section */}
      <Box sx={{ 
        position: 'relative',
        mt: { xs: -8, md: -12 },
        mb: 8,
        width: '100%',
        zIndex: 2,
        bgcolor: 'background.default'
      }}>
        <Container 
          maxWidth={false}
          sx={{ 
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
            position: 'relative',
            zIndex: 2
          }}
        >
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={6} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mb: 3
                      }}>
                        <Avatar
                          src={testimonial.image}
                          alt={testimonial.name}
                          sx={{ 
                            width: 80,
                            height: 80,
                            mr: 2,
                            border: '4px solid',
                            borderColor: 'primary.main'
                          }}
                        />
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontWeight: 600,
                              color: 'primary.main'
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              fontFamily: 'Roboto, sans-serif',
                              mb: 1
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                          <Rating 
                            value={testimonial.rating} 
                            readOnly 
                            size="small"
                            sx={{ color: 'primary.main' }}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ position: 'relative' }}>
                        <FormatQuoteIcon 
                          sx={{ 
                            position: 'absolute',
                            top: -20,
                            left: -10,
                            fontSize: 60,
                            color: 'primary.main',
                            opacity: 0.1
                          }} 
                        />
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontFamily: 'Roboto, sans-serif',
                            lineHeight: 1.8,
                            color: 'text.primary',
                            position: 'relative',
                            zIndex: 1
                          }}
                        >
                          {testimonial.text}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Share Your Story Section */}
      <Box sx={{ 
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        mt: 8
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              mb: 2
            }}>
              Share Your Story
            </Typography>
            <Typography variant="body1" sx={{ 
              fontFamily: 'Roboto, sans-serif',
              mb: 4,
              opacity: 0.9
            }}>
              We'd love to hear about your experience at RIMS School
            </Typography>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: 2
            }}>
              <Typography variant="body2" sx={{ 
                fontFamily: 'Roboto, sans-serif',
                opacity: 0.9
              }}>
                Email us at: rims2063@gmail.com
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TestimonialsPage; 