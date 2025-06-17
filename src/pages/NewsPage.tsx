import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container, Pagination, Stack } from '@mui/material';

const featuredNews = [
  {
    id: 1,
    title: "New Academic Programs Announced",
    description: "We are excited to announce the launch of new specialized programs in Computer Science and Data Analytics. These programs are designed to meet the growing demands of the tech industry.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Campus Infrastructure Upgrade",
    description: "Major renovation work begins on the main campus building to enhance learning facilities and student experience. The project includes modern classrooms and research labs.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop",
    date: "March 14, 2024"
  },
  {
    id: 3,
    title: "International Conference Success",
    description: "Our faculty members presented groundbreaking research at the International Education Summit 2024, receiving recognition for innovative teaching methodologies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    date: "March 13, 2024"
  }
];

const regularNews = [
  {
    id: 4,
    title: "Student Achievement Awards",
    description: "Congratulations to our students who won top honors in the National Science Competition.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    date: "March 12, 2024"
  },
  {
    id: 5,
    title: "Research Grant Awarded",
    description: "Our institution receives a major research grant for innovative educational technology projects.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop",
    date: "March 11, 2024"
  },
  {
    id: 6,
    title: "Community Outreach Program",
    description: "New initiative launched to connect students with local community service opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    date: "March 10, 2024"
  },
  {
    id: 7,
    title: "Alumni Success Story",
    description: "Graduate from our Computer Science program leads breakthrough in AI research.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    date: "March 9, 2024"
  }
];

const NewsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(regularNews.length / itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handlePageChange2 = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage2(value);
  };

  return (
    <Box sx={{ width: '100vw', bgcolor: 'background.default', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Latest News & Updates
          </Typography>
          <Typography 
            variant="h6" 
            align="center"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9
            }}
          >
            Stay informed about the latest happenings and announcements from our institution
          </Typography>
        </Container>
      </Box>

      {/* Featured News Section */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 8 }}>
          {featuredNews.map((item) => (
            <Card 
              key={item.id}
              sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', sm: '400px' },
                  height: { xs: '240px', sm: 'auto' }
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ flex: 1, p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.date}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Regular News Grid */}
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          More News
        </Typography>
        <Grid container spacing={4}>
          {regularNews.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '240px',
                    objectFit: 'cover'
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ flex: 1 }}>
                    {item.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* First Pagination */}
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Stack>

        {/* Second News Grid */}
        <Typography variant="h4" gutterBottom sx={{ mt: 8, mb: 4 }}>
          Additional News
        </Typography>
        <Grid container spacing={4}>
          {regularNews.slice((page2 - 1) * itemsPerPage, page2 * itemsPerPage).map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '240px',
                    objectFit: 'cover'
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ flex: 1 }}>
                    {item.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Second Pagination */}
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page2} 
            onChange={handlePageChange2}
            color="primary"
            size="large"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsPage; 