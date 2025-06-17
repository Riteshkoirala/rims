import { Box, Container, Grid, Typography } from '@mui/material';
import { Star, EmojiEvents, School, Public, MenuBook, SportsSoccer } from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Star sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Experienced Faculty',
    description: 'Highly qualified teachers dedicated to student success and academic excellence.',
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Holistic Development',
    description: 'Balanced focus on academics, character building, and extracurricular activities.',
  },
  {
    icon: <School sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms, labs, and sports amenities for optimal learning.',
  },
  {
    icon: <Public sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Global Exposure',
    description: 'International exchange programs and cultural events for global perspective.',
  },
  {
    icon: <MenuBook sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured syllabus designed for intellectual growth and success.',
  },
  {
    icon: <SportsSoccer sx={{ fontSize: 48, color: '#8B0000' }} />,
    title: 'Sports & Activities',
    description: 'Diverse sports programs and clubs promoting fitness and teamwork.',
  },
];

const Features = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
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
            Why Choose RIMS?
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.3rem' },
                      color: 'text.primary',
                      minHeight: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      lineHeight: 1.6,
                      minHeight: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 