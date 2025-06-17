import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { School, Group, EmojiEvents, AccessTime } from '@mui/icons-material';
import { motion } from 'framer-motion';

const QuickInfo = () => {
  const items = [
    {
      icon: <School sx={{ fontSize: 48, color: '#1565C0' }} />,
      title: 'Quality Education',
      description: 'Modern curriculum with experienced faculty dedicated to student success.',
    },
    {
      icon: <Group sx={{ fontSize: 48, color: '#1565C0' }} />,
      title: '10000+ Students', // This will be animated
      description: 'A vibrant and growing community of learners.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48, color: '#1565C0' }} />,
      title: 'Excellence',
      description: 'Consistent academic achievements and recognition.',
    },
    {
      icon: <AccessTime sx={{ fontSize: 48, color: '#1565C0' }} />,
      title: 'Est. 2010',
      description: 'Over a decade of educational excellence.',
    },
  ];

  const [studentCount, setStudentCount] = useState(0);
  const finalCount = 10000; // The target number for animation

  useEffect(() => {
    let start = 0;
    const end = finalCount;
    if (start === end) return;

    const duration = 2000; // Animation duration in milliseconds
    const frameDuration = 1000 / 60; // Approx 60 fps
    const totalFrames = duration / frameDuration;
    const countIncrement = (end / totalFrames);

    const counter = setInterval(() => {
      start += countIncrement;
      const animatedCount = Math.min(Math.ceil(start), end);
      setStudentCount(animatedCount);

      if (start >= end) {
        clearInterval(counter);
      }
    }, frameDuration);

    // Cleanup interval on component unmount
    return () => clearInterval(counter);
  }, [finalCount]); // Rerun effect if finalCount changes


  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container 
        maxWidth={false}
        sx={{ 
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.3rem' },
                      color: 'text.primary',
                    }}
                  >
                    {index === 1 ? `${studentCount}+ Students` : item.title} {/* Animate only the second item (index 1) */}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
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

export default QuickInfo;