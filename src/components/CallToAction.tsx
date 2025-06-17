import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: '#1565C0', color: 'white' }}>
      <Container 
        maxWidth={false}
        sx={{ 
          px: { xs: 3, sm: 4, md: 6 },
          textAlign: 'center',
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
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'white',
            }}
          >
            Admissions Open for 2082!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              opacity: 0.9,
              color: 'white',
            }}
          >
            Join our thriving community of learners and educators.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 6,
              py: 1.8,
              fontSize: '1.2rem',
              fontWeight: 600,
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            Admission Info
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction; 