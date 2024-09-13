import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Chip,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';

const features = [
  "State-of-the-art Gym",
  "Modern Game Center",
  "Reliable Water Supply",
  "24/7 Electricity",
  "Professional Cleaning",
  "Enhanced Security",
  "Private En-suite Rooms",
  "Comfortable Lounge",
  "Prime Ibadan Location",
];

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.text.secondary,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Booking = () => {
  const theme = useTheme();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      if (response.ok) {
        setBookingData({
          name: '',
          email: '',
          phone: '',
          roomType: '',
          checkInDate: '',
          checkOutDate: '',
        });
        setSnackbar({
          open: true,
          message: "Booking successful! We'll contact you soon to confirm your stay.",
          severity: 'success',
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({
        open: true,
        message: `Booking failed: ${error.message}`,
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <Box>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 4,
                  }}
                >
                  Book Your Stay at Wakimi Hostel
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Experience luxury and comfort in the heart of Ibadan.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {features.map((feature, index) => (
                    <Grow in={true} timeout={1000 + index * 200} key={index}>
                      <Chip
                        label={feature}
                        sx={{
                          m: 0.5,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                        }}
                      />
                    </Grow>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1500}>
              <StyledForm onSubmit={handleSubmit}>
                <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                  Reserve Now
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={bookingData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Room Type</InputLabel>
                      <Select
                        name="roomType"
                        value={bookingData.roomType}
                        onChange={handleChange}
                        label="Room Type"
                        required
                      >
                        <MenuItem value="">Select Room Type</MenuItem>
                        <MenuItem value="single">Single Room (1 person)</MenuItem>
                        <MenuItem value="double">Double Room (2 persons)</MenuItem>
                        <MenuItem value="suite">Suite</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Check-in Date"
                      name="checkInDate"
                      type="date"
                      value={bookingData.checkInDate}
                      onChange={handleChange}
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Check-out Date"
                      name="checkOutDate"
                      type="date"
                      value={bookingData.checkOutDate}
                      onChange={handleChange}
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
              </StyledForm>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Booking;