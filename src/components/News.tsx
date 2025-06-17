import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const newsItems = [
  {
    image: 'https://picsum.photos/seed/news1/400/220',
    title: 'Annual Sports Day',
    date: 'October 26, 2023',
    description: 'Highlights from our recent Annual Sports Day, celebrating athleticism and teamwork.',
  },
  {
    image: 'https://picsum.photos/seed/news2/400/220',
    title: 'Science Fair Innovations',
    date: 'November 10, 2023',
    description: 'Students showcase creativity and scientific knowledge at the annual science fair.',
  },
  {
    image: 'https://picsum.photos/seed/news3/400/220',
    title: 'Cultural Fest Extravaganza',
    date: 'November 20, 2023',
    description: 'A vibrant display of talent and culture by our students and faculty members.',
  },
  {
    image: 'https://picsum.photos/seed/news4/400/220',
    title: 'School Play Success',
    date: 'December 5, 2023',
    description: 'Our students put on a spectacular performance in this year\'s annual school play.',
  },
];

const News = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.paper' }}>
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
            Latest News & Events
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {newsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontSize: { xs: '1.2rem', md: '1.3rem' },
                        color: '#1565C0',
                        minHeight: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ 
                      mb: 1.5,
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      lineHeight: 1.7,
                      minHeight: '4rem',
                      display: 'flex',
                      alignItems: 'center',
                     }}>
                      {item.date}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: { xs: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              }}
            >
              View All News
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default News; 