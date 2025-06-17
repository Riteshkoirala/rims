import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Welcome = () => {
  // Further shortened dummy message for the principal
  const principalMessage = "Dear Students, Parents, and Guardians,\n\nWelcome to RIMS School, a place where we are dedicated to fostering intellectual curiosity, personal growth, and a strong sense of community. Our mission is to provide a nurturing and challenging environment that empowers every student to achieve their full potential.\n\nWe look forward to welcoming you.";

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper' }}>
      <Container 
        maxWidth={false}
        sx={{ 
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* Centered Heading */}
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
              mb: { xs: 6, md: 10 }, // Increased margin below heading
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'text.primary', // Use primary text color
            }}
          >
            Welcome to RIMS School
          </Typography>
        </motion.div>

        {/* Flex container for image and message */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Principal Photo (Left) */}
          <Box
            sx={{
              flex: { md: '0 0 40%' },
              width: '100%',
              maxWidth: { md: '400px' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    border: '3px solid', // Maroon border
                    borderColor: '#8B0000',
                    borderRadius: 2,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://picsum.photos/seed/principal/400/500" // Dummy image from Picsum
                  alt="School Principal"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* Principal Message (Right) */}
          <Box
            sx={{
              flex: { md: '0 0 60%' },
              width: '100%',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
               <Typography
                variant="h6" // Principal's Message Title
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: '#1565C0', // Use blue for this title
                }}
              >
                Message from the Principal
              </Typography>
              <Typography
                variant="body1" // Principal's Message Content
                sx={{
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6, // Slightly reduced line height
                  color: 'text.secondary',
                  whiteSpace: 'pre-line',
                }}
              >
                {principalMessage}
              </Typography>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}> {/* Slightly reduced top margin */}
                 <Avatar
                   src="https://picsum.photos/seed/principal/60" // Dummy image for avatar
                   alt="Principal"
                   sx={{ width: 60, height: 60, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                 />
                 <Box>
                   <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem', color: 'text.primary' }}>
                     [Principal's Name]
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     Principal, RIMS School
                   </Typography>
                 </Box>
               </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome; 