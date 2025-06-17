import { Box, Typography, Grid, TextField, Button, Paper, Stack, IconButton, InputAdornment, Container, useTheme, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ContactPage = () => {
  const theme = useTheme();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: '50vh', md: '60vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" sx={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Contact RIMS School
            </Typography>
            <Typography variant="h5" sx={{ 
              fontFamily: 'Roboto, sans-serif',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              opacity: 0.9
            }}>
              We're here to help you with your questions and visit planning
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ 
        position: 'relative',
        mt: { xs: -8, md: -12 },
        mb: 8,
        width: '100%',
        zIndex: 2
      }}>
        {/* Contact Form and Info Section */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mb: 8,
          position: 'relative',
          zIndex: 2
        }}>
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            maxWidth: '1200px',
            gap: 4,
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            position: 'relative',
            zIndex: 2
          }}>
            {/* Contact Information - Left Side */}
            <Box sx={{ 
              width: { xs: '100%', md: '400px' },
              flexShrink: 0,
              height: '100%',
              position: 'relative',
              zIndex: 2
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 4 },
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <Typography variant="h4" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  mb: 3, 
                  fontWeight: 700,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Get in Touch
                </Typography>
                
                <Stack spacing={2} sx={{ flex: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}>
                    <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Our Location
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontFamily: 'Roboto, sans-serif',
                        opacity: 0.9
                      }}>
                        Besigaun, Jorpati, Gokarneshwor-8, Kathmandu
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}>
                    <PhoneIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Phone Number
                      </Typography>
                      <Link 
                        href="tel:+977-1-4910504" 
                        sx={{ 
                          color: 'white',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ 
                          fontFamily: 'Roboto, sans-serif',
                          opacity: 0.9
                        }}>
                          +977-1-4910504
                        </Typography>
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}>
                    <EmailIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Email Address
                      </Typography>
                      <Link 
                        href="mailto:rims2063@gmail.com" 
                        sx={{ 
                          color: 'white',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ 
                          fontFamily: 'Roboto, sans-serif',
                          opacity: 0.9
                        }}>
                          rims2063@gmail.com
                        </Typography>
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Office Hours
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontFamily: 'Roboto, sans-serif',
                        opacity: 0.9
                      }}>
                        Sunday – Friday | 9:00 AM – 4:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ 
                    fontFamily: 'Poppins, sans-serif',
                    mb: 1,
                    color: 'white',
                    fontSize: '1rem'
                  }}>
                    Follow Us
                  </Typography>
                  <IconButton 
                    component={Link}
                    href="https://facebook.com/rimsschool"
                    target="_blank"
                    sx={{ 
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.25)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Box>

            {/* Contact Form - Right Side */}
            <Box sx={{ 
              flex: 1,
              position: 'relative',
              zIndex: 2
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 6 },
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  height: '100%',
                  position: 'relative',
                  zIndex: 2,
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '6px',
                    background: 'linear-gradient(90deg, #1976d2 0%, #2196f3 100%)'
                  }
                }}
              >
                <Box sx={{ 
                  maxWidth: '600px',
                  mx: 'auto',
                  position: 'relative'
                }}>
                  <Typography variant="h4" sx={{ 
                    fontFamily: 'Poppins, sans-serif',
                    mb: 1, 
                    fontWeight: 700,
                    color: 'primary.main',
                    textAlign: 'center'
                  }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontFamily: 'Roboto, sans-serif',
                    mb: 4,
                    color: 'text.secondary',
                    textAlign: 'center'
                  }}>
                    Have questions? We'd love to hear from you.
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Box sx={{ 
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'primary.main',
                          borderRadius: '4px 0 0 4px',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:focus-within::before': {
                          opacity: 1
                        }
                      }}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon color="primary" />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: 'background.default',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(25, 118, 210, 0.04)'
                              },
                              '&.Mui-focused': {
                                bgcolor: 'rgba(25, 118, 210, 0.08)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontFamily: 'Roboto, sans-serif'
                            }
                          }}
                        />
                      </Box>

                      <Box sx={{ 
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'primary.main',
                          borderRadius: '4px 0 0 4px',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:focus-within::before': {
                          opacity: 1
                        }
                      }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon color="primary" />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: 'background.default',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(25, 118, 210, 0.04)'
                              },
                              '&.Mui-focused': {
                                bgcolor: 'rgba(25, 118, 210, 0.08)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontFamily: 'Roboto, sans-serif'
                            }
                          }}
                        />
                      </Box>

                      <Box sx={{ 
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'primary.main',
                          borderRadius: '4px 0 0 4px',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:focus-within::before': {
                          opacity: 1
                        }
                      }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SubjectIcon color="primary" />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: 'background.default',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(25, 118, 210, 0.04)'
                              },
                              '&.Mui-focused': {
                                bgcolor: 'rgba(25, 118, 210, 0.08)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontFamily: 'Roboto, sans-serif'
                            }
                          }}
                        />
                      </Box>

                      <Box sx={{ 
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'primary.main',
                          borderRadius: '4px 0 0 4px',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:focus-within::before': {
                          opacity: 1
                        }
                      }}>
                        <TextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={4}
                          variant="outlined"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MessageIcon color="primary" />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              bgcolor: 'background.default',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: 'rgba(25, 118, 210, 0.04)'
                              },
                              '&.Mui-focused': {
                                bgcolor: 'rgba(25, 118, 210, 0.08)'
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontFamily: 'Roboto, sans-serif'
                            }
                          }}
                        />
                      </Box>

                      <Box sx={{ 
                        textAlign: 'center',
                        pt: 2
                      }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            py: 1.5,
                            px: 6,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            fontFamily: 'Poppins, sans-serif',
                            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                              transition: 'all 0.3s ease',
                              background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)'
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </Stack>
                  </form>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Map Section */}
        <Box sx={{ 
          width: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          position: 'relative',
          zIndex: 2
        }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              mb: 4
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2
                }}>
                  Visit Us
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Roboto, sans-serif',
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.7
                }}>
                  Experience our campus firsthand. We're located in a peaceful environment in Jorpati, 
                  easily accessible by public transportation. Come visit us during our office hours 
                  and let us show you around our facilities.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    href="https://maps.google.com"
                    target="_blank"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<AccessTimeIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    View Office Hours
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ 
                width: { xs: '100%', md: '300px' },
                bgcolor: 'primary.light',
                borderRadius: 4,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h6" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  color: 'primary.main',
                  mb: 2,
                  fontWeight: 600
                }}>
                  Quick Info
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AccessTimeIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ 
                      fontFamily: 'Roboto, sans-serif',
                      color: 'text.secondary'
                    }}>
                      Sunday – Friday<br />
                      9:00 AM – 4:00 PM
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ 
                      fontFamily: 'Roboto, sans-serif',
                      color: 'text.secondary'
                    }}>
                      +977-1-4910504
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body2" sx={{ 
                      fontFamily: 'Roboto, sans-serif',
                      color: 'text.secondary'
                    }}>
                      rims2063@gmail.com
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box
              sx={{
                height: 400,
                width: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.3456789!3d27.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1859f0b0b0b0%3A0x0!2sRIMS%20School!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Box>

        {/* FAQs Section */}
        <Box sx={{ 
          mt: 8,
          width: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          position: 'relative',
          zIndex: 2
        }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          >
            <Typography variant="h4" sx={{ 
              fontFamily: 'Poppins, sans-serif',
              mb: 4, 
              fontWeight: 700,
              color: 'primary.main'
            }}>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  mb: 2,
                  color: 'primary.main'
                }}>
                  How to reach the school?
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Roboto, sans-serif',
                  color: 'text.secondary'
                }}>
                  The school is easily accessible by public transportation. You can take a bus to Jorpati and then a short walk to Besigaun. We're located near the main road for easy access.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  mb: 2,
                  color: 'primary.main'
                }}>
                  Office hours for admissions inquiry?
                </Typography>
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Roboto, sans-serif',
                  color: 'text.secondary'
                }}>
                  Our admissions office is open during regular school hours. For detailed information about admissions, please visit during office hours or contact us through the form above.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Bottom CTA Section */}
        <Box sx={{ 
          mt: 8,
          width: '100%',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          position: 'relative',
          zIndex: 2
        }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 6 },
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" sx={{ 
              fontFamily: 'Poppins, sans-serif',
              mb: 2,
              fontWeight: 700
            }}>
              Still have questions?
            </Typography>
            <Typography variant="h6" sx={{ 
              fontFamily: 'Roboto, sans-serif',
              mb: 4,
              opacity: 0.9
            }}>
              Give us a call or drop by for a campus tour
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+977-1-4910504"
                sx={{
                  py: 1.5,
                  px: 6,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Poppins, sans-serif',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Call Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LocationOnIcon />}
                href="https://maps.google.com"
                target="_blank"
                sx={{
                  py: 1.5,
                  px: 6,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontFamily: 'Poppins, sans-serif',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Schedule a Visit
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Box>

      {/* Mobile CTA Button */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<PhoneIcon />}
          href="tel:+977-1-4910504"
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 8,
            textTransform: 'none',
            fontSize: '1rem',
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
              transition: 'all 0.3s ease'
            }
          }}
        >
          Call Now
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage; 