import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box, Typography, Grid, Button, Card, CardContent, List, ListItem,
  ListItemIcon, ListItemText, Container, IconButton, useMediaQuery,
  Fade, Grow, Avatar
} from '@mui/material';
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircleOutline as CheckCircleOutlineIcon
} from '@mui/icons-material';

// Ensure these paths are correct
const images = [
  '../images/wakimiimages/imi.png',
  '../images/wakimiimages/Wakimi2.jpeg',
  '../images/wakimiimages/Wakimi3.jpeg',
  '../images/wakimiimages/wakimi1-removebg-preview.png',
  '../images/wakimiimages/wakimi4.jpeg'
];
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#00e5ff',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

const Feature = ({ text }) => (
  <ListItem>
    <ListItemIcon>
      <CheckCircleOutlineIcon color="secondary" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const ContactItem = ({ icon: Icon, text }) => (
  <ListItem>
    <ListItemIcon>
      <Icon color="secondary" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const TestimonialCard = ({ name, text }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent>
      <Box sx={{ display: 'flex', mb: 2 }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color="secondary" />
        ))}
      </Box>
      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>"{text}"</Typography>
      <Typography variant="subtitle1" color="secondary">- {name}</Typography>
    </CardContent>
  </Card>
);

const Welcome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Fade in={true} timeout={1000}>
            <Box
              component="img"
              src={images[currentImageIndex]}
              alt="Luxurious Hostel"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Fade>
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Grow in={true} timeout={1000}>
              <Typography variant="h1" sx={{ fontSize: isSmallScreen ? '3rem' : '5rem', fontWeight: 'bold', mb: 2 }}>
                Welcome to Wakimi Hostel
              </Typography>
            </Grow>
            <Grow in={true} timeout={1500}>
              <Typography variant="h3" sx={{ fontSize: isSmallScreen ? '1.5rem' : '2.5rem', mb: 4 }}>
                Luxury Living in Ibadan
              </Typography>
            </Grow>
            <Grow in={true} timeout={2000}>
              <Button
                component={Link}
                to="/booking"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: 'linear-gradient(45deg, #6200ea 30%, #00e5ff 90%)',
                  border: 0,
                  color: 'white',
                  height: 56,
                  padding: '0 30px',
                  boxShadow: '0 3px 5px 2px rgba(98, 0, 234, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #7c4dff 30%, #18ffff 90%)',
                  },
                }}
              >
                Book Your Stay
              </Button>
            </Grow>
          </Box>
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ my: 8 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" gutterBottom color="secondary">
                  Experience Luxury
                </Typography>
                <Typography variant="body1" paragraph>
                  Nestled in the serene environment of Apete, Ibadan, Wakimi Hostel offers a perfect blend of luxury and comfort. Our hostel is designed to provide a tranquil retreat for students and young professionals, with modern amenities and impeccable services that ensure a hassle-free living experience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={images[1]}
                  alt="Luxury Living"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h2" align="center" gutterBottom color="secondary" sx={{ mb: 8 }}>
              Why Choose Wakimi Hostel?
            </Typography>
            <Grid container spacing={4}>
              {[
                "State-of-the-art Gym",
                "Modern Game Center",
                "Reliable Water Supply",
                "24/7 Electricity",
                "Backup Solar System",
                "Professional Cleaning Services",
                "24/7 CCTV Surveillance",
                "Live-in Security Guard",
                "Private Rooms with En-suite",
                "Comfortable Lounge Area",
                "Prime Location in Ibadan"
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grow in={true} timeout={(index + 1) * 500}>
                    <Card>
                      <CardContent>
                        <Feature text={feature} />
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h2" align="center" gutterBottom color="secondary" sx={{ mb: 8 }}>
              Testimonials
            </Typography>
            <Grid container spacing={4}>
              {[
                { name: "John Okoro", text: "Wakimi Hostel is the best place I've ever stayed in. The facilities are top-notch, and the staff are very friendly." },
                { name: "Tosin Okoro", text: "I love the cleanliness and the security at Wakimi Hostel. I feel safe and at home here." },
                { name: "Michael Johnson", text: "The amenities at Wakimi Hostel are exceptional. I highly recommend this place to anyone looking for a comfortable stay." },
                { name: "Victoria Mmadu", text: "Living here has been a wonderful experience. The environment is peaceful and the services are top-notch." }
              ].map((testimonial, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Fade in={true} timeout={(index + 1) * 500}>
                    <Box>
                      <TestimonialCard {...testimonial} />
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h2" align="center" gutterBottom color="secondary" sx={{ mb: 8 }}>
              Contact Us
            </Typography>
            <Card>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom color="secondary">
                      Location
                    </Typography>
                    <Typography paragraph>
                      Apete opp. Foodmataz supermarket
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom color="secondary">
                      Get in Touch
                    </Typography>
                    <ContactItem icon={WhatsAppIcon} text="+2348080737373" />
                    <ContactItem icon={WhatsAppIcon} text="+2348037003150" />
                    <ContactItem icon={PhoneIcon} text="+2348138156882" />
                    <ContactItem icon={PhoneIcon} text="+2348075946179" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Welcome;