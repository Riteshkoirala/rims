import { Box, Container, Typography, Grid, Paper, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Admission = () => {
  const admissionProcess = [
    {
      title: "Application Submission",
      icon: <DescriptionIcon />,
      description: "Complete the online application form with required documents",
      details: [
        "Birth Certificate",
        "Previous School Records",
        "Passport Size Photographs",
        "Address Proof",
        "Parent/Guardian ID Proof"
      ]
    },
    {
      title: "Entrance Assessment",
      icon: <AssignmentIcon />,
      description: "Student assessment and parent interaction session",
      details: [
        "Age-appropriate assessment",
        "Basic skills evaluation",
        "Parent-teacher interaction",
        "School tour and orientation"
      ]
    },
    {
      title: "Document Verification",
      icon: <CheckCircleOutlineIcon />,
      description: "Verification of submitted documents and records",
      details: [
        "Academic records verification",
        "Document authenticity check",
        "Transfer certificate processing",
        "Medical records review"
      ]
    },
    {
      title: "Fee Payment",
      icon: <AttachMoneyIcon />,
      description: "Payment of admission and other applicable fees",
      details: [
        "Registration fee",
        "Tuition fee",
        "Development fee",
        "Other applicable charges"
      ]
    }
  ];

  const importantDates = [
    { date: "January 15, 2024", event: "Application Process Begins" },
    { date: "March 31, 2024", event: "Last Date for Application Submission" },
    { date: "April 15-30, 2024", event: "Entrance Assessments" },
    { date: "May 15, 2024", event: "Result Declaration" },
    { date: "May 20-31, 2024", event: "Document Verification" },
    { date: "June 1-15, 2024", event: "Fee Payment" },
    { date: "June 20, 2024", event: "Academic Year Begins" }
  ];

  const feeStructure = [
    {
      level: "Kindergarten",
      registration: "₹5,000",
      tuition: "₹60,000/year",
      development: "₹15,000/year",
      other: "₹10,000/year"
    },
    {
      level: "Primary School",
      registration: "₹7,500",
      tuition: "₹75,000/year",
      development: "₹20,000/year",
      other: "₹15,000/year"
    },
    {
      level: "Middle School",
      registration: "₹10,000",
      tuition: "₹90,000/year",
      development: "₹25,000/year",
      other: "₹20,000/year"
    },
    {
      level: "Higher Secondary",
      registration: "₹12,500",
      tuition: "₹1,20,000/year",
      development: "₹30,000/year",
      other: "₹25,000/year"
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
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop)',
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
              Admissions
            </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Begin Your Journey of Excellence
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Admission Process */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={false}>
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700, color: '#1976D2' }}>
            Admission Process
          </Typography>
          <Grid container spacing={4}>
            {admissionProcess.map((step, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 3,
                        color: '#1976D2'
                      }}>
                        <Box sx={{ mr: 2 }}>{step.icon}</Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {step.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 3, color: '#000000' }}>
                        {step.description}
                      </Typography>
                      <List>
                        {step.details.map((detail, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleOutlineIcon sx={{ color: '#1976D2', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Important Dates */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
        <Container maxWidth={false}>
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700, color: '#1976D2' }}>
            Important Dates
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {importantDates.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper sx={{ 
                    p: 3, 
                    borderRadius: 4,
                    bgcolor: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: '#1976D2', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                        {item.date}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#000000', opacity: 0.8 }}>
                      {item.event}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Fee Structure */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth={false}>
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700, color: '#1976D2' }}>
            Fee Structure
          </Typography>
          <Grid container spacing={4}>
            {feeStructure.map((level, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    height: '100%',
                    borderRadius: 4,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ 
                        fontWeight: 600, 
                        mb: 3,
                        color: '#1976D2'
                      }}>
                        {level.level}
                      </Typography>
                      <List>
                        <ListItem sx={{ py: 1 }}>
                          <ListItemText 
                            primary="Registration Fee" 
                            secondary={level.registration}
                            primaryTypographyProps={{ color: '#000000' }}
                            secondaryTypographyProps={{ color: '#000000', fontWeight: 500 }}
                          />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ py: 1 }}>
                          <ListItemText 
                            primary="Tuition Fee" 
                            secondary={level.tuition}
                            primaryTypographyProps={{ color: '#000000' }}
                            secondaryTypographyProps={{ color: '#000000', fontWeight: 500 }}
                          />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ py: 1 }}>
                          <ListItemText 
                            primary="Development Fee" 
                            secondary={level.development}
                            primaryTypographyProps={{ color: '#000000' }}
                            secondaryTypographyProps={{ color: '#000000', fontWeight: 500 }}
                          />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ py: 1 }}>
                          <ListItemText 
                            primary="Other Charges" 
                            secondary={level.other}
                            primaryTypographyProps={{ color: '#000000' }}
                            secondaryTypographyProps={{ color: '#000000', fontWeight: 500 }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
        <Container maxWidth={false}>
          <Box sx={{ 
            maxWidth: '800px', 
            mx: 'auto', 
            textAlign: 'center',
            p: 4,
            borderRadius: 4,
            bgcolor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <ContactSupportIcon sx={{ fontSize: 60, color: '#1976D2', mb: 3 }} />
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: '#000000' }}>
              Need Help with Admission?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#000000', opacity: 0.8 }}>
              Our admission counselors are here to help you with the application process and answer any questions you may have.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: '#1976D2',
                '&:hover': {
                  bgcolor: '#1565C0'
                }
              }}
            >
              Contact Admission Office
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Admission; 