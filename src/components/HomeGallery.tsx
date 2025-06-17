import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const HomeGallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      title: "Sports Week"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      title: "Fun Friday"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      title: "Parent's Day"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      title: "Memories"
    },
    {
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
      title: "Excursions"
    },
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      title: "Sports Week"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', width: '100%' }}>
      <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Our Gallery
        </Typography>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  sx={{ 
                    overflow: 'hidden',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height={300}
                    image={image.url}
                    alt={image.title}
                    sx={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeGallery; 