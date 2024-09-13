import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  QuestionAnswer as FAQIcon,
} from '@mui/icons-material';

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

const Support = () => {
  const contactMethods = [
    { icon: <EmailIcon />, text: 'Email: support@wakimihostel.com', link: 'mailto:support@wakimihostel.com' },
    { icon: <PhoneIcon />, text: 'Phone: +2348138156882', link: 'tel:+2348138156882' },
    { icon: <PhoneIcon />, text: 'Phone: +2348075946179', link: 'tel:+2348075946179' },
    { icon: <WhatsAppIcon />, text: 'WhatsApp: +2348080737373', link: 'https://wa.me/2348080737373' },
    { icon: <WhatsAppIcon />, text: 'WhatsApp: +2348037003150', link: 'https://wa.me/2348037003150' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          py: 8,
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: 'secondary.main' }}>
            Support & Help
          </Typography>
          <Typography variant="body1" paragraph align="center">
            If you have any questions or need assistance, we're here to help! Our support team is available 24/7 to ensure you have a seamless experience at Wakimi Hostel.
          </Typography>
          
          <Paper elevation={3} sx={{ mt: 4, p: 4, backgroundColor: 'background.paper' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main' }}>
              Contact Support
            </Typography>
            <Typography variant="body1" paragraph>
              For any support inquiries, please reach out to us through the following channels:
            </Typography>
            <List>
              {contactMethods.map((method, index) => (
                <ListItem key={index} component="a" href={method.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary', '&:hover': { color: 'secondary.main' } }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {method.icon}
                  </ListItemIcon>
                  <ListItemText primary={method.text} />
                </ListItem>
              ))}
            </List>
          </Paper>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="/faq"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<FAQIcon />}
              sx={{
                color: 'primary.main',
                '&:hover': { backgroundColor: 'secondary.light' },
              }}
            >
              Visit FAQs
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Support;