import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material';


import { styled } from '@mui/system';
import { Phone as PhoneIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';

// Import your images
import roomImage1 from '../images/image6.png';
import roomImage2 from '../images/gymImage.png';
import roomImage3 from '../images/image3.png';
import roomImage4 from '../images/image4.png';
import roomImage5 from '../images/image5.png';
import roomImage6 from '../images/image2.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a2744', // dark blue
    },
    secondary: {
      main: '#fef08a', // light yellow
    },
    background: {
      default: '#0a2744',
      paper: '#1a365d',
    },
    text: {
      primary: '#fff9c2',
      secondary: '#fef08a',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: '$fadeIn 0.5s ease-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const Spaces = () => {
  const roomImages = [roomImage1, roomImage2, roomImage3, roomImage4, roomImage5, roomImage6];
  const contactMethods = [
    { icon: <WhatsAppIcon />, text: '+2348080737373 WhatsApp' },
    { icon: <WhatsAppIcon />, text: '+2348037003150 WhatsApp' },
    { icon: <PhoneIcon />, text: '+2348138156882 Phone' },
    { icon: <PhoneIcon />, text: '+2348075946179 Phone' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', py: 8 }}>
        <Container maxWidth="lg">
          <AnimatedBox>
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: 'secondary.main' }}>
              Our 28 Spectacular Rooms
            </Typography>
          </AnimatedBox>

          <AnimatedBox sx={{ animationDelay: '0.2s' }}>
            <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
              Each room at Wakimi Hostel is designed to offer a luxurious and comfortable stay. Our rooms are equipped with modern amenities to ensure that your experience is nothing short of spectacular.
            </Typography>
          </AnimatedBox>

          <Grid container spacing={3}>
            {roomImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedBox sx={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <StyledImage src={image} alt={`Room ${index + 1}`} />
                </AnimatedBox>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                color: 'primary.main',
                '&:hover': { backgroundColor: 'secondary.light' },
              }}
            >
              Book Now
            </Button>
          </Box>

          <Paper elevation={3} sx={{ mt: 6, p: 4, backgroundColor: 'background.paper' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              For inquiries and bookings, please call:
            </Typography>
            <List>
              {contactMethods.map((method, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ color: 'secondary.main' }}>
                    {method.icon}
                  </ListItemIcon>
                  <ListItemText primary={method.text} sx={{ color: 'text.primary' }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Spaces;