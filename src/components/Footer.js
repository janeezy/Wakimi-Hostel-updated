import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  useTheme 
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn 
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <Facebook />, url: "https://facebook.com" },
    { icon: <Twitter />, url: "https://twitter.com" },
    { icon: <Instagram />, url: "https://instagram.com" },
    { icon: <LinkedIn />, url: "https://linkedin.com" }
  ];

  const pageLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Wakimi Hostel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Providing luxurious and comfortable living for students and young professionals in Ibadan.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {pageLinks.map((link) => (
                <Box key={link.name} sx={{ width: '50%', mb: 1 }}>
                  <Link href={link.url} color="inherit" sx={{ '&:hover': { color: theme.palette.primary.main } }}>
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.icon.type.name} page`}
                  sx={{ 
                    mr: 1, 
                    color: theme.palette.text.secondary,
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Wakimi Hostel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;