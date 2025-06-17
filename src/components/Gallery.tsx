import { Box, Typography, Grid, Card, CardMedia, Tabs, Tab, IconButton, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    {
      name: "Sports Week",
      color: "#FF6B6B",
      images: [
        {
          url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
          title: "Track and Field Events",
          description: "Students participating in various track and field competitions",
          date: "2024-03-15",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Team Sports",
          description: "Basketball and volleyball matches during Sports Week",
          date: "2024-03-16",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Swimming Competition",
          description: "Annual swimming championship at the school pool",
          date: "2024-03-17",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Indoor Sports",
          description: "Table tennis and badminton tournaments",
          date: "2024-03-18",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Athletics",
          description: "Long jump and high jump competitions",
          date: "2024-03-19",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Team Building",
          description: "Students working together in team sports",
          date: "2024-03-20",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Sports Awards",
          description: "Award ceremony for outstanding athletes",
          date: "2024-03-21",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Cheerleading",
          description: "School cheerleading squad performances",
          date: "2024-03-22",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Sports Day Parade",
          description: "Opening ceremony parade of Sports Week",
          date: "2024-03-23",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
          title: "Closing Ceremony",
          description: "Final day celebrations and prize distribution",
          date: "2024-03-24",
          size: "small"
        }
      ]
    },
    {
      name: "Fun Friday",
      color: "#4ECDC4",
      images: [
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Art Workshop",
          description: "Students expressing creativity through art",
          date: "2024-03-01",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Music Session",
          description: "Live music performances by students",
          date: "2024-03-08",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Dance Workshop",
          description: "Students learning different dance forms",
          date: "2024-03-15",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Science Experiments",
          description: "Fun and interactive science demonstrations",
          date: "2024-03-22",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Cooking Class",
          description: "Students learning basic cooking skills",
          date: "2024-03-29",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Drama Workshop",
          description: "Theater and acting activities",
          date: "2024-04-05",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Coding Club",
          description: "Introduction to programming and robotics",
          date: "2024-04-12",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Gardening",
          description: "Students learning about plants and gardening",
          date: "2024-04-19",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Photography",
          description: "Basic photography skills workshop",
          date: "2024-04-26",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
          title: "Craft Making",
          description: "Creative craft activities and projects",
          date: "2024-05-03",
          size: "small"
        }
      ]
    },
    {
      name: "Parent's Day",
      color: "#FFD93D",
      images: [
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Welcome Ceremony",
          description: "Parents being welcomed to the school",
          date: "2024-03-10",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Classroom Visits",
          description: "Parents observing classroom activities",
          date: "2024-03-10",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Student Performances",
          description: "Cultural program for parents",
          date: "2024-03-10",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Parent-Teacher Meeting",
          description: "One-on-one discussions about student progress",
          date: "2024-03-10",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "School Tour",
          description: "Guided tour of school facilities",
          date: "2024-03-10",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Interactive Sessions",
          description: "Parents participating in activities",
          date: "2024-03-10",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Award Ceremony",
          description: "Recognizing outstanding students",
          date: "2024-03-10",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Cultural Program",
          description: "Students performing for their parents",
          date: "2024-03-10",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Refreshments",
          description: "Social gathering with snacks and drinks",
          date: "2024-03-10",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
          title: "Farewell",
          description: "Closing ceremony of Parent's Day",
          date: "2024-03-10",
          size: "small"
        }
      ]
    },
    {
      name: "Memories",
      color: "#95E1D3",
      images: [
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Graduation Day",
          description: "Class of 2024 graduation ceremony",
          date: "2024-05-15",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Annual Day",
          description: "School's annual cultural program",
          date: "2024-04-20",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Science Fair",
          description: "Student science projects exhibition",
          date: "2024-03-25",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Art Exhibition",
          description: "Showcasing student artwork",
          date: "2024-03-18",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Sports Achievements",
          description: "Celebrating sports victories",
          date: "2024-03-11",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Cultural Events",
          description: "Various cultural performances",
          date: "2024-03-04",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "School Trips",
          description: "Educational and recreational trips",
          date: "2024-02-26",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Competitions",
          description: "Inter-school competitions",
          date: "2024-02-19",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Workshops",
          description: "Special skill development sessions",
          date: "2024-02-12",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
          title: "Celebrations",
          description: "Festival and special day celebrations",
          date: "2024-02-05",
          size: "small"
        }
      ]
    },
    {
      name: "Excursions",
      color: "#FF8B94",
      images: [
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Museum Visit",
          description: "Educational trip to the science museum",
          date: "2024-03-05",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Nature Park",
          description: "Exploring wildlife and nature",
          date: "2024-03-12",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Historical Sites",
          description: "Visit to historical monuments",
          date: "2024-03-19",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Industrial Tour",
          description: "Learning about manufacturing processes",
          date: "2024-03-26",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Adventure Camp",
          description: "Outdoor adventure activities",
          date: "2024-04-02",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Beach Trip",
          description: "Educational visit to the beach",
          date: "2024-04-09",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Zoo Visit",
          description: "Learning about different animal species",
          date: "2024-04-16",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Farm Visit",
          description: "Understanding agricultural practices",
          date: "2024-04-23",
          size: "small"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Space Center",
          description: "Exploring space and astronomy",
          date: "2024-04-30",
          size: "large"
        },
        {
          url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
          title: "Cultural Tour",
          description: "Visit to cultural heritage sites",
          date: "2024-05-07",
          size: "small"
        }
      ]
    }
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const toggleFavorite = (imageUrl: string) => {
    setFavorites(prev => 
      prev.includes(imageUrl) 
        ? prev.filter(url => url !== imageUrl)
        : [...prev, imageUrl]
    );
  };

  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
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
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop)',
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
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
            School Gallery
          </Typography>
            <Typography variant="h5" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}>
              Capturing Moments of Excellence
            </Typography>
        </motion.div>
        </Box>
      </Box>

      {/* Gallery Content */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Category Navigation */}
          <Box sx={{ 
            position: 'sticky',
            top: 0,
            bgcolor: 'background.default',
            zIndex: 10,
            py: 2,
            mb: 4,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {categories[selectedTab].name}
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => setShowFilters(!showFilters)}>
                  <FilterListIcon />
                </IconButton>
              </Stack>
            </Box>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  minWidth: 120,
                  px: 3,
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    color: categories[selectedTab].color
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: categories[selectedTab].color,
                  height: 3
                }
              }}
            >
              {categories.map((category, index) => (
                <Tab 
                  key={index} 
                  label={category.name}
                  sx={{
                    '&.Mui-selected': {
                      color: category.color
                    }
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Gallery Grid */}
          <Grid container spacing={3}>
            {categories[selectedTab].images.map((image, index) => (
              <Grid item xs={12} sm={6} md={image.size === 'large' ? 8 : 4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      borderRadius: 2,
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.1)',
                        },
                        '& .image-overlay': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height={image.size === 'large' ? 500 : 300}
                        image={image.url}
                        alt={image.title}
                        sx={{ 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                      />
                      <Box
                        className="image-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          p: 2,
                          color: 'white'
                        }}
                      >
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {image.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {image.description}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                          <Chip 
                            label={new Date(image.date).toLocaleDateString()} 
                            size="small"
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}
                          />
                          <Chip 
                            label={categories[selectedTab].name}
                            size="small"
                            sx={{ bgcolor: categories[selectedTab].color }}
                          />
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <IconButton 
                            size="small" 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(image.url);
                            }}
                            sx={{ color: 'white' }}
                          >
                            {favorites.includes(image.url) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                          </IconButton>
                          <IconButton 
                            size="small" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(image.url);
                            }}
                            sx={{ color: 'white' }}
                          >
                            <ZoomInIcon />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Share functionality would go here
                            }}
                            sx={{ color: 'white' }}
                          >
                            <ShareIcon />
                          </IconButton>
                        </Stack>
                      </Box>
                    </Box>
                  </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>

      {/* Image Preview Modal */}
      {selectedImage && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
          onClick={() => setSelectedImage(null)}
        >
          <IconButton
              sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <CloseIcon />
          </IconButton>
                <Box
                  component="img"
                  src={selectedImage}
            alt="Preview"
                  sx={{
                    maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain'
                  }}
                />
        </Box>
              )}
    </Box>
  );
};

export default Gallery; 