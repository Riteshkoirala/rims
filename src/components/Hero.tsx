import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '85vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))',
          zIndex: 1,
        },
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          objectFit: 'cover',
        }}
      >
        <source src="/videos/rims.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      <Container 
        maxWidth={false}
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '70%' },
              mt: { xs: 4, md: 0 }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Shaping Bright Futures at RIMS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 5,
                fontSize: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                maxWidth: { md: '80%' }
              }}
            >
              Quality education in a caring environment.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 6px rgba(255, 215, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 8px rgba(255, 215, 0, 0.4)',
                  }
                }}
              >
                Explore Our School
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 