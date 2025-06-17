import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Paper,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

interface ApplyNowModalProps {
  open: boolean;
  onClose: () => void;
}

const ApplyNowModal = ({ open, onClose }: ApplyNowModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as string]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 2 },
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
        }
      }}
    >
      <DialogTitle sx={{ 
        m: 0, 
        p: { xs: 2, sm: 3 },
        bgcolor: '#B8860B',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            Apply for Admission
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
            Fill out the form below to begin your application process
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent 
        sx={{ 
          p: { xs: 2, sm: 3 },
          bgcolor: 'background.default',
          overflowY: 'auto',
          mt: 2,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#666',
            },
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={4}>
            {/* Student Information */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 4 },
                  bgcolor: '#B8860B',
                  color: 'white',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  mb: 3, 
                  fontWeight: 700,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Student Information
                </Typography>
                <Stack spacing={3}>
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
                    <PersonIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Student's Full Name
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        variant="standard"
                        sx={{
                          '& .MuiInputBase-root': {
                            color: 'white',
                          },
                          '& .MuiInput-underline:before': {
                            borderBottomColor: 'rgba(255,255,255,0.3)',
                          },
                          '& .MuiInput-underline:hover:before': {
                            borderBottomColor: 'white',
                          },
                        }}
                      />
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
                    <CalendarTodayIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Date of Birth
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          '& .MuiInputBase-root': {
                            color: 'white',
                          },
                          '& .MuiInput-underline:before': {
                            borderBottomColor: 'rgba(255,255,255,0.3)',
                          },
                          '& .MuiInput-underline:hover:before': {
                            borderBottomColor: 'white',
                          },
                        }}
                      />
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
                    <SchoolIcon sx={{ fontSize: 32, color: 'white' }} />
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600, 
                        color: 'white',
                        fontSize: '1rem'
                      }}>
                        Grade Applying For
                      </Typography>
                      <FormControl fullWidth variant="standard" required>
                        <Select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          sx={{
                            color: 'white',
                            '&:before': {
                              borderBottomColor: 'rgba(255,255,255,0.3)',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                              borderBottomColor: 'white',
                            },
                            '& .MuiSelect-icon': {
                              color: 'white',
                            },
                          }}
                        >
                          <MenuItem value="nursery">Nursery</MenuItem>
                          <MenuItem value="lkg">LKG</MenuItem>
                          <MenuItem value="ukg">UKG</MenuItem>
                          <MenuItem value="1">Grade 1</MenuItem>
                          <MenuItem value="2">Grade 2</MenuItem>
                          <MenuItem value="3">Grade 3</MenuItem>
                          <MenuItem value="4">Grade 4</MenuItem>
                          <MenuItem value="5">Grade 5</MenuItem>
                          <MenuItem value="6">Grade 6</MenuItem>
                          <MenuItem value="7">Grade 7</MenuItem>
                          <MenuItem value="8">Grade 8</MenuItem>
                          <MenuItem value="9">Grade 9</MenuItem>
                          <MenuItem value="10">Grade 10</MenuItem>
                          <MenuItem value="11">Grade 11</MenuItem>
                          <MenuItem value="12">Grade 12</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            {/* Parent Information */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 4 },
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '6px',
                    background: 'linear-gradient(90deg, #B8860B 0%, #DAA520 100%)'
                  }
                }}
              >
                <Typography variant="h5" sx={{ 
                  fontFamily: 'Poppins, sans-serif',
                  mb: 3, 
                  fontWeight: 700,
                  color: '#B8860B',
                  textAlign: 'center'
                }}>
                  Parent/Guardian Information
                </Typography>
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
                      background: '#B8860B',
                      borderRadius: '4px 0 0 4px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:focus-within::before': {
                      opacity: 1
                    }
                  }}>
                    <TextField
                      required
                      fullWidth
                      label="Parent/Guardian Name"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
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
                      background: '#B8860B',
                      borderRadius: '4px 0 0 4px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:focus-within::before': {
                      opacity: 1
                    }
                  }}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
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
                      background: '#B8860B',
                      borderRadius: '4px 0 0 4px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:focus-within::before': {
                      opacity: 1
                    }
                  }}>
                    <TextField
                      required
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
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
                      background: '#B8860B',
                      borderRadius: '4px 0 0 4px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:focus-within::before': {
                      opacity: 1
                    }
                  }}>
                    <TextField
                      required
                      fullWidth
                      label="Previous School (if any)"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SchoolIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
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
                      background: '#B8860B',
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
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      multiline
                      rows={2}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
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
                      background: '#B8860B',
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
                      label="Additional Information"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={3}
                      placeholder="Please provide any additional information you'd like us to know"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MessageIcon color="#B8860B" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'background.default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(184, 134, 11, 0.04)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(184, 134, 11, 0.08)'
                          }
                        }
                      }}
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ 
        p: { xs: 2, sm: 3 }, 
        bgcolor: 'grey.50',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        bottom: 0
      }}>
        <Button 
          onClick={onClose}
          sx={{ 
            mr: 1,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'grey.200'
            }
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          endIcon={<SendIcon />}
          sx={{
            px: 4,
            py: 1,
            fontWeight: 600,
            bgcolor: '#B8860B',
            '&:hover': {
              bgcolor: '#DAA520',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }
          }}
        >
          Submit Application
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplyNowModal; 