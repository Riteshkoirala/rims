import { Box, Container, Typography, Grid, Paper, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ScienceIcon from '@mui/icons-material/Science';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Academic = () => {
  const educationLevels = [
    {
      title: "Kindergarten",
      subtitle: "Nursery to UKG",
      icon: <ChildCareIcon sx={{ fontSize: 40 }} />,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      ageGroup: "3-5 years",
      classSize: "15-20 students",
      duration: "3 years",
      features: [
        "Play-based learning approach",
        "Early childhood development focus",
        "Creative activities and arts",
        "Basic numeracy and literacy",
        "Social skills development",
        "Physical education and games",
        "Music and movement classes",
        "Regular parent-teacher interaction",
        "Montessori-inspired activities",
        "Outdoor learning experiences",
        "Language development programs",
        "Emotional intelligence training"
      ],
      highlights: [
        "Child-friendly infrastructure",
        "Safe and secure environment",
        "Qualified early childhood educators",
        "Regular health check-ups"
      ],
      description: "Our kindergarten program provides a nurturing environment where young minds begin their educational journey. We focus on holistic development through play-based learning, creative activities, and early skill development. Our curriculum is designed to foster curiosity, creativity, and a love for learning while ensuring each child's unique needs are met."
    },
    {
      title: "Primary & Middle School",
      subtitle: "Class 1-10",
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      ageGroup: "6-15 years",
      classSize: "25-30 students",
      duration: "10 years",
      features: [
        "Comprehensive curriculum",
        "Experienced teaching staff",
        "Regular assessments and feedback",
        "Extracurricular activities",
        "Sports and physical education",
        "Art and cultural programs",
        "Computer education",
        "Language development",
        "Project-based learning",
        "Environmental awareness",
        "Leadership opportunities",
        "Community service programs"
      ],
      highlights: [
        "Smart classrooms",
        "Well-equipped laboratories",
        "Sports facilities",
        "Digital learning resources"
      ],
      description: "Our primary and middle school program builds a strong foundation for academic excellence. We emphasize both academic achievement and character development, preparing students for higher education and life beyond school. Our curriculum is designed to develop critical thinking, problem-solving skills, and a global perspective."
    },
    {
      title: "Higher Secondary",
      subtitle: "Class 11-12",
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      ageGroup: "16-17 years",
      classSize: "20-25 students",
      duration: "2 years",
      features: [
        "Science and Commerce streams",
        "Expert subject teachers",
        "Career counseling",
        "Competitive exam preparation",
        "Research opportunities",
        "Advanced laboratory facilities",
        "University placement support",
        "Leadership development",
        "Industry exposure",
        "Internship programs",
        "Soft skills training",
        "Entrepreneurship workshops"
      ],
      highlights: [
        "Advanced laboratories",
        "Career counseling center",
        "Research facilities",
        "University tie-ups"
      ],
      description: "Our higher secondary program offers specialized streams in Science and Commerce, preparing students for university education and professional careers. We provide comprehensive support for competitive exams and career development. Our curriculum is designed to develop specialized knowledge, research skills, and professional competencies."
    }
  ];

  const commonFeatures = [
    "Modern infrastructure and facilities",
    "Well-equipped laboratories",
    "Extensive library resources",
    "Smart classroom technology",
    "Regular parent-teacher meetings",
    "Health and wellness programs",
    "Transportation facilities",
    "Security and safety measures"
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
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/academic/1920/1080)',
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
              Academic Programs
            </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Nurturing Excellence at Every Level
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Education Levels */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={false}>
          <Grid container spacing={6}>
            {educationLevels.map((level, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      borderRadius: 4,
                      overflow: 'hidden',
                      bgcolor: index % 2 === 0 ? 'background.paper' : 'background.default',
                      color: index % 2 === 0 ? 'text.primary' : 'text.primary',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                      {/* Image Section */}
                      <Box 
                        sx={{ 
                          width: { xs: '100%', md: '40%' },
                          minHeight: { xs: '300px', md: '600px' },
                          position: 'relative',
                          bgcolor: 'primary.light'
                        }}
                      >
                        <Box
                          component="img"
                          src={level.image}
                          alt={level.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 4,
                            textAlign: 'center'
                          }}
                        >
                          <Box
                            sx={{
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                              bgcolor: 'rgba(255,255,255,0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 3,
                              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                              border: '2px solid rgba(255,255,255,0.3)',
                              backdropFilter: 'blur(4px)'
                            }}
                          >
                            <Box sx={{ 
                              color: 'white',
                              '& .MuiSvgIcon-root': {
                                fontSize: 50,
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              }
                            }}>
                              {level.icon}
                            </Box>
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{
                              color: 'white',
                              fontWeight: 700,
                              mb: 1,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                              fontSize: { xs: '1.75rem', md: '2.125rem' }
                            }}
                          >
                            {level.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'rgba(255,255,255,0.9)',
                              mb: 3,
                              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                              fontSize: { xs: '1.1rem', md: '1.25rem' }
                            }}
                          >
                            {level.subtitle}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 2,
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              '& .MuiChip-root': {
                                backdropFilter: 'blur(4px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                '& .MuiSvgIcon-root': {
                                  color: 'rgba(255,255,255,0.9)'
                                }
                              }
                            }}
                          >
                            <Chip
                              icon={<PeopleIcon />}
                              label={level.ageGroup}
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.15)',
                                color: 'white',
                                '&:hover': {
                                  bgcolor: 'rgba(255,255,255,0.25)'
                                }
                              }}
                            />
                            <Chip
                              icon={<AccessTimeIcon />}
                              label={level.duration}
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.15)',
                                color: 'white',
                                '&:hover': {
                                  bgcolor: 'rgba(255,255,255,0.25)'
                                }
                              }}
                            />
                            <Chip
                              icon={<EmojiEventsIcon />}
                              label={level.classSize}
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.15)',
                                color: 'white',
                                '&:hover': {
                                  bgcolor: 'rgba(255,255,255,0.25)'
                                }
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>

                      {/* Content Section */}
                      <Box 
                        sx={{ 
                          width: { xs: '100%', md: '60%' },
                          p: { xs: 4, md: 6 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}
                      >
                        <Box sx={{ mb: 4 }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontSize: '1.1rem', 
                              lineHeight: 1.8,
                              color: 'text.primary'
                            }}
                          >
                            {level.description}
                          </Typography>
                        </Box>
                        
                        {/* Highlights Section */}
                        <Box sx={{ mb: 4 }}>
                          <Typography variant="h6" sx={{ 
                            mb: 2, 
                            color: '#1976D2', 
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            Key Highlights
                          </Typography>
                          <Grid container spacing={2}>
                            {level.highlights.map((highlight, highlightIndex) => (
                              <Grid item xs={12} sm={6} key={highlightIndex}>
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  p: 1.5,
                                  borderRadius: 2,
                                  bgcolor: '#E3F2FD',
                                  color: '#1565C0',
                                  border: '1px solid #BBDEFB',
                                  transition: 'all 0.2s ease-in-out',
                                  '&:hover': {
                                    bgcolor: '#BBDEFB',
                                    transform: 'translateY(-2px)'
                                  }
                                }}>
                                  <CheckCircleOutlineIcon sx={{ mr: 1, color: '#1565C0' }} />
                                  <Typography variant="body2" sx={{ fontWeight: 500 }}>{highlight}</Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>

                        {/* Features Section */}
                        <Box>
                          <Typography variant="h6" sx={{ 
                            mb: 2, 
                            color: '#1976D2', 
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            Program Features
                          </Typography>
                          <Grid container spacing={2}>
                            {level.features.map((feature, featureIndex) => (
                              <Grid item xs={12} sm={6} key={featureIndex}>
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  mb: 1,
                                  p: 1.5,
                                  borderRadius: 2,
                                  bgcolor: '#F5F5F5',
                                  border: '1px solid #E0E0E0',
                                  transition: 'all 0.2s ease-in-out',
                                  '&:hover': {
                                    bgcolor: '#EEEEEE',
                                    transform: 'translateX(4px)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                  }
                                }}>
                                  <CheckCircleOutlineIcon sx={{ color: '#1565C0', mr: 1 }} />
                                  <Typography variant="body2" sx={{ color: '#424242' }}>{feature}</Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Common Features */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#F8F9FA',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1976D2, #64B5F6)'
        }
      }}>
        <Container maxWidth={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: '#1976D2',
                mb: 2
              }}>
                School Facilities
              </Typography>
              <Typography variant="h6" sx={{ 
                color: '#424242',
                maxWidth: '800px',
                mx: 'auto'
              }}>
                State-of-the-art infrastructure designed to provide the best learning environment
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {commonFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 4,
                      borderRadius: 4,
                      bgcolor: 'white',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                        '& .icon-wrapper': {
                          transform: 'scale(1.1)',
                          bgcolor: '#1976D2',
                          color: 'white'
                        }
                      }
                    }}>
                      <Box sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        bgcolor: '#F5F5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: '#000000',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: -4,
                          left: -4,
                          right: -4,
                          bottom: -4,
                          borderRadius: '50%',
                          border: '2px dashed #E0E0E0',
                          animation: 'spin 20s linear infinite',
                          '@keyframes spin': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' }
                          }
                        }
                      }} className="icon-wrapper">
                        <AutoStoriesIcon sx={{ fontSize: 40 }} />
                      </Box>
                      <Typography variant="h6" align="center" sx={{ 
                        fontWeight: 600,
                        color: '#000000',
                        mb: 2
                      }}>
                        {feature}
                      </Typography>
                      <Typography variant="body2" align="center" sx={{ 
                        color: '#000000',
                        lineHeight: 1.6,
                        opacity: 0.8
                      }}>
                        Experience world-class facilities designed to enhance learning and development
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Academic; 