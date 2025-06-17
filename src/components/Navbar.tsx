import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ApplyNowModal from './ApplyNowModal';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academic' },
  { label: 'Admissions', path: '/admission' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getNavLinkProps = (path: string) => {
    const isActive = location.pathname === path;
    return {
      component: RouterLink,
      to: path,
      sx: {
        color: 'white',
        textDecoration: 'none',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          width: isActive ? '100%' : '0%',
          height: '2px',
          bottom: -4,
          left: 0,
          backgroundColor: 'white',
          transition: 'width 0.3s ease-in-out',
        },
        '&:hover::after': {
          width: '100%',
        },
      },
    };
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RIMS School
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        color="default"
        elevation={1}
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: { xs: 64, md: 80 },
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexGrow: 1,
                gap: { xs: 1, md: 2 },
                cursor: 'pointer',
              }}
            >
              <Box 
                component="img"
                src="/images/logo/logo.jpg"
                alt="RIMS School Logo"
                sx={{
                  width: { xs: 40, md: 50 },
                  height: 'auto',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  fontWeight: 700,
                  color: '#8B0000',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                RIMS School
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'primary.main' }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                  }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { md: 2, lg: 4 }
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    {...getNavLinkProps(item.path)}
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: 'text.primary',
                      '&:hover': {
                        color: '#1565C0',
                        backgroundColor: 'transparent',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setApplyModalOpen(true)}
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 6px rgba(139, 0, 0, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 8px rgba(139, 0, 0, 0.4)',
                    }
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <ApplyNowModal 
        open={applyModalOpen} 
        onClose={() => setApplyModalOpen(false)} 
      />
    </>
  );
};

export default Navbar; 