import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import AdmissionPage from './pages/AdmissionPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academic" element={<AcademicPage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
