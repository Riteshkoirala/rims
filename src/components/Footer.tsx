import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, LocationOn, Phone, Email } from '@mui/icons-material';

const quickLinks = [
  { title: 'About Us', href: '#about' },
  { title: 'Academics', href: '#academics' },
  { title: 'Admissions', href: '#admissions' },
  { title: 'Facilities', href: '#facilities' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{
      bgcolor: 'background.paper',
      color: 'text.primary',
      py: { xs: 8, md: 10 },
      fontSize: '1rem',
    }}>
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <Box sx={{ mr: 4 }}>
              <Box 
                component="img"
                src="/images/logo/logo.jpg"
                alt="RIMS School Logo"
                sx={{
                  width: 150,
                  height: 'auto',
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#8B0000' }}>
                RIMS School
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8, fontSize: '1rem' }}>
                Providing quality education in a caring environment to shape bright futures.
              </Typography>
              <IconButton 
                href="#"
                target="_blank"
                aria-label="Facebook"
                sx={{
                  color: '#1565C0',
                  '&:hover': {
                    color: '#FFD700',
                  }
                }}
              >
                <Facebook />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ alignItems: 'flex-start' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#8B0000' }}>
              Quick Links
            </Typography>
            <Box>
              {quickLinks.map((link) => (
                <Link 
                  key={link.title}
                  href={link.href} 
                  color="text.primary" 
                  underline="hover"
                  sx={{
                    display: 'block',
                    mb: 0.8,
                    fontSize: '1rem',
                    '&:hover': {
                      color: '#1565C0',
                    }
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ alignItems: 'flex-start' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#8B0000' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <LocationOn sx={{ mr: 1.5, fontSize: '1.3rem', color: '#1565C0' }} />
                <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>Gokarneshwor-8, Jorpati, Kathmandu</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Phone sx={{ mr: 1.5, fontSize: '1.3rem', color: '#1565C0' }} />
                <Typography variant="body2" color="text.primary" sx={{ fontSize: '1rem' }}>+977 1-491XXXX</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 1.5, fontSize: '1.3rem', color: '#1565C0' }} />
                <Typography variant="body2" color="text.primary" sx={{ fontSize: '1rem' }}>info@rimsschool.edu.np</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 8, md: 10 }, pt: { xs: 4, md: 6 }, borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="body2" sx={{ opacity: 0.9, color: 'text.secondary', fontSize: '0.9rem' }}>
            &copy; {currentYear} RIMS School. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 