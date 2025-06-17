import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import ComputerIcon from '@mui/icons-material/Computer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PoolIcon from '@mui/icons-material/Pool';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SecurityIcon from '@mui/icons-material/Security';
import WifiIcon from '@mui/icons-material/Wifi';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with smart boards, projectors, and comfortable seating arrangements.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
      icon: <SchoolIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art physics, chemistry, and biology labs with modern equipment and safety measures.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      icon: <ScienceIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Computer Labs",
      description: "Advanced computer laboratories with high-speed internet, latest software, and modern hardware.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      icon: <ComputerIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Library",
      description: "Well-stocked library with a vast collection of books, journals, and digital resources.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
      icon: <LocalLibraryIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Sports Complex",
      description: "Extensive sports facilities including cricket ground, football field, basketball court, and indoor sports.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Swimming Pool",
      description: "Olympic-size swimming pool with trained instructors and safety measures.",
      image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800&h=600&fit=crop",
      icon: <PoolIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Cafeteria",
      description: "Modern cafeteria serving nutritious and hygienic food with a variety of options.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Music & Arts",
      description: "Dedicated spaces for music, dance, and arts with professional equipment and instructors.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Security",
      description: "24/7 security with CCTV surveillance and trained security personnel.",
      image: "https://images.unsplash.com/photo-1555952497-054835f5c5c8?w=800&h=600&fit=crop",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Smart Campus",
      description: "Wi-Fi enabled campus with smart classrooms and digital learning resources.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      icon: <WifiIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: '40vh', md: '50vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }
      }}>
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" sx={{ 
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              World-Class Facilities
            </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Creating an Environment for Excellence
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Facilities Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={false}>
          <Grid container spacing={4} justifyContent="center">
            {facilities.map((facility, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ maxWidth: '600px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                      '& .MuiCardContent-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      }
                    }
                  }}>
                    <Box sx={{ position: 'relative', height: 300 }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={facility.image}
                        alt={facility.title}
                        sx={{ 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          height: '100%'
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
                          display: 'flex',
                          alignItems: 'flex-end',
                          p: 3
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          color: 'white'
                        }}>
                          <Box sx={{ 
                            mr: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {facility.icon}
                          </Box>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 600,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                          }}>
                            {facility.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <CardContent sx={{ 
                      p: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transition: 'background-color 0.3s ease-in-out'
                    }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#000000',
                          lineHeight: 1.7,
                          fontSize: '1.1rem'
                        }}
                      >
                        {facility.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Features */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
        <Container maxWidth={false}>
          <Typography variant="h3" align="center" sx={{ 
            mb: 6, 
            fontWeight: 700, 
            color: '#1976D2',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#1976D2',
              borderRadius: 2
            }
          }}>
            Additional Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} sx={{ maxWidth: '600px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    height: 200,
                    background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)'
                  }}>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3
                    }}>
                      <SecurityIcon sx={{ 
                        fontSize: 80, 
                        color: 'white',
                        opacity: 0.2
                      }} />
                    </Box>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3
                    }}>
                      <Typography variant="h4" sx={{ 
                        color: 'white',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}>
                        Health & Wellness
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                      {[
                        "Medical room with trained staff",
                        "Regular health check-ups",
                        "Counseling services",
                        "Yoga and meditation center"
                      ].map((feature, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: '#F5F5F5',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              bgcolor: '#E3F2FD',
                              transform: 'translateX(8px)'
                            }
                          }}>
                            <Box sx={{ 
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              bgcolor: '#1976D2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              color: 'white'
                            }}>
                              {index + 1}
                            </Box>
                            <Typography variant="body1" sx={{ 
                              color: '#000000',
                              fontWeight: 500
                            }}>
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: '600px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    height: 200,
                    background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)'
                  }}>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3
                    }}>
                      <DirectionsBusIcon sx={{ 
                        fontSize: 80, 
                        color: 'white',
                        opacity: 0.2
                      }} />
                    </Box>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3
                    }}>
                      <Typography variant="h4" sx={{ 
                        color: 'white',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}>
                        Transportation
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                      {[
                        "GPS-enabled school buses",
                        "Trained drivers and attendants",
                        "Safe and comfortable travel",
                        "Extensive route coverage"
                      ].map((feature, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: '#F5F5F5',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              bgcolor: '#E3F2FD',
                              transform: 'translateX(8px)'
                            }
                          }}>
                            <Box sx={{ 
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              bgcolor: '#1976D2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              color: 'white'
                            }}>
                              {index + 1}
                            </Box>
                            <Typography variant="body1" sx={{ 
                              color: '#000000',
                              fontWeight: 500
                            }}>
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Facilities; 