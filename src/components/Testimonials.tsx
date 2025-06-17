import { useState } from 'react';
import { Box, Container, Typography, Avatar, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "The school's focus on both traditional values and modern education creates a perfect balance for learning and growth.",
    author: 'Krishna Sharma',
    role: 'Parent',
    avatar: 'https://picsum.photos/seed/parent1/100/100',
  },
  {
    quote: 'RIMS provided me with a strong foundation for my higher studies and career. The teachers were incredibly supportive and inspiring.',
    author: 'Aisha Khan',
    role: 'Alumna',
    avatar: 'https://picsum.photos/seed/alumni1/100/100',
  },
  {
    quote: 'I love the friendly environment and the variety of extracurricular activities available at RIMS. Learning is fun and engaging here!',
    author: 'Rohan Patel',
    role: 'Current Student',
    avatar: 'https://picsum.photos/seed/student1/100/100',
  },
  {
    quote: 'The school administration is very supportive and always open to feedback, making it a great community to be a part of.',
    author: 'Priya Singh',
    role: 'Parent',
    avatar: 'https://picsum.photos/seed/parent2/100/100',
  },
  {
    quote: 'Attending RIMS was a transformative experience that prepared me well for the challenges ahead in my academic journey.',
    author: 'Vikram Reddy',
    role: 'Alumnus',
    avatar: 'https://picsum.photos/seed/alumni2/100/100',
  },
  {
    quote: 'The diverse student body and inclusive culture at RIMS make it a welcoming place for everyone to learn and thrive.',
    author: 'Fatima Ali',
    role: 'Current Student',
    avatar: 'https://picsum.photos/seed/student2/100/100',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.default' }}>
      <Container 
        maxWidth={false}
        sx={{ 
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'text.primary',
            }}
          >
            What Our Community Says
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: currentIndex > (currentIndex === 0 ? 0 : (currentIndex -1 + testimonials.length) % testimonials.length) ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentIndex > (currentIndex === 0 ? 0 : (currentIndex -1 + testimonials.length) % testimonials.length) ? -50 : 50 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', width: '100%' }}
            >
              <Box
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  px: 3,
                  py: { xs: 4, md: 6 },
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="blockquote"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontStyle: 'italic',
                    mb: 4,
                    lineHeight: 1.8,
                    color: 'text.primary',
                  }}
                >
                  "{currentTestimonial.quote}"
                </Typography>
                <Avatar
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#8B0000' }}>
                  {currentTestimonial.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentTestimonial.role}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 6, md: 8 }, // Adjusted margin top
            gap: 4,
          }}
        >
          <IconButton onClick={handlePrevious} sx={{ color: '#1565C0', '&:hover': { color: '#FFD700' } }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: '#1565C0', '&:hover': { color: '#FFD700' } }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 