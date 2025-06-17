import { Box, Container, Typography, Grid, Avatar, Card, CardContent, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const AboutUs = () => {
  // Dummy data - replace with actual content
  const schoolDescription = "Welcome to RIMS School, where we are dedicated to nurturing the potential within every student. Established with a vision to provide holistic education, RIMS has grown into a leading institution known for its academic rigor, vibrant community, and commitment to individual growth. Our curriculum is designed not only to impart knowledge but also to foster critical thinking, creativity, and a lifelong love for learning. We believe in a balanced approach, ensuring students excel academically while also developing strong character, leadership skills, and a sense of social responsibility. Our state-of-the-art facilities, experienced faculty, and supportive environment create the perfect setting for students to thrive.";
  
  const chairmanMessage = {
    text: "It fills me with immense joy and pride to address you as the Chairman of RIMS School. Since our inception, our goal has been unwavering: to build an institution that stands as a beacon of quality education and human values. We embarked on this journey with the belief that education is the most powerful tool for change, and our role is to equip our students with the knowledge, skills, and integrity to navigate a complex world. We have strived to create an environment where students feel safe, challenged, and inspired to explore their full potential. Our dedicated faculty, supportive parents, and enthusiastic students form a vibrant community that is the heart of RIMS. As we look to the future, we remain committed to adapting to the evolving educational landscape while staying true to our foundational principles of excellence and empathy. Thank you for being a part of the RIMS family.",
    author: 'Mr. Chairman Name',
    avatar: 'https://picsum.photos/seed/chairman/200/200',
  };

  const principalMessage = {
    text: "Dear Students, Parents, and the cherished RIMS Community, It is a distinct honor and pleasure to welcome you to RIMS School. Our school is a place of vibrant learning, discovery, and personal growth. We are committed to providing an educational experience that is both enriching and transformative, preparing students not just for academic success, but for a fulfilling life. At RIMS, we foster an environment where curiosity is ignited, creativity is celebrated, and every student is encouraged to find their voice. Our comprehensive programs, dedicated teachers, and state-of-the-art resources work in synergy to provide a holistic education. We place a strong emphasis on cultivating values such as respect, responsibility, and resilience, which we believe are essential for navigating the complexities of the modern world. I am incredibly proud of our students' achievements and the collaborative spirit of our community. I invite you to join us in our pursuit of excellence and to become a part of the RIMS legacy.",
    author: 'Dr. Principal Name',
    avatar: 'https://picsum.photos/seed/principal2/200/200',
  };

  // Dummy staff data structure - populated as requested
  const staff = [
    // Vice Principal
    { name: 'Ms. Vice Principal Name', role: 'Vice Principal', photo: 'https://picsum.photos/seed/viceprincipal/150/150' },
    // Teachers (30 dummy entries)
    ...Array.from({ length: 30 }, (_, i) => ({
      name: `Teacher ${i + 1} Name`,
      role: 'Teacher',
      subject: `Subject ${i + 1}`,
      photo: `https://picsum.photos/seed/teacher${i + 1}/150/150`,
    })),
    // Sisters (10 dummy entries)
    ...Array.from({ length: 10 }, (_, i) => ({
      name: `Sister ${i + 1} Name`,
      role: 'Sister',
      photo: `https://picsum.photos/seed/sister${i + 1}/150/150`,
    })),
    // Guard
    { name: 'Mr. Guard Name', role: 'Guard', photo: 'https://picsum.photos/seed/guard/150/150' },
  ];

  const stats = [
    { icon: <SchoolIcon sx={{ fontSize: 40 }} />, value: '10000+', label: 'Students' },
    { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, value: '95%', label: 'Success Rate' },
    { icon: <GroupsIcon sx={{ fontSize: 40 }} />, value: '50+', label: 'Expert Teachers' },
    { icon: <AutoStoriesIcon sx={{ fontSize: 40 }} />, value: '25+', label: 'Years of Excellence' },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }} id="about">
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: '50vh', md: '60vh' },
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
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/school/1920/1080)',
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
              About RIMS School
            </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Nurturing Minds, Building Futures
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth={false}>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2, color: 'gold' }}>{stat.icon}</Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About School Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth={false}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Box 
                component="img"
                src="https://picsum.photos/seed/school2/800/600"
                alt="RIMS School Building"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'text.primary',
                mb: 4
              }}>
                {schoolDescription}
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Chairman's Message */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} sx={{ p: { xs: 4, md: 8 }, borderRadius: 4, bgcolor: 'background.paper' }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                alignItems: 'center'
              }}>
                <Box sx={{ 
                  flex: { xs: '1 1 100%', md: '0 0 300px' },
                  textAlign: 'center'
                }}>
                  <Avatar
                    src={chairmanMessage.avatar}
                    alt={chairmanMessage.author}
                    sx={{
                      width: 200,
                      height: 200,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {chairmanMessage.author}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Chairman
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
                    Chairman's Message
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.primary',
                    fontStyle: 'italic'
                  }}>
                    "{chairmanMessage.text}"
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Principal's Message */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} sx={{ p: { xs: 4, md: 8 }, borderRadius: 4, bgcolor: 'background.default' }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                alignItems: 'center'
              }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
                    Principal's Message
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.primary',
                    fontStyle: 'italic'
                  }}>
                    "{principalMessage.text}"
                  </Typography>
                </Box>
                <Box sx={{ 
                  flex: { xs: '1 1 100%', md: '0 0 300px' },
                  textAlign: 'center'
                }}>
                  <Avatar
                    src={principalMessage.avatar}
                    alt={principalMessage.author}
                    sx={{
                      width: 200,
                      height: 200,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {principalMessage.author}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Principal
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Staff Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" align="center" sx={{ mb: { xs: 4, md: 6 }, fontWeight: 700, color: 'primary.main' }}>
              Meet Our Staff
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {staff.map((person, index) => (
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
                      p: 3,
                      borderRadius: 4,
                      transition: 'transform 0.3s ease-in-out',
                      bgcolor: 'background.paper',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}>
                      <Avatar
                        src={person.photo}
                        alt={person.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mb: 2,
                          border: '3px solid',
                          borderColor: 'primary.main'
                        }}
                      />
                      <Typography variant="h6" align="center" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {person.name}
                      </Typography>
                      <Typography variant="body2" align="center" color="text.secondary">
                        {person.role}{person.subject ? ` - ${person.subject}` : ''}
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

export default AboutUs; 