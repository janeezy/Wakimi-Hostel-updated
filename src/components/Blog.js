import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Fade,
  Grow,
  Button,
  Divider,
  Avatar,
  Chip
} from '@mui/material';
import { 
  StarBorder as StarBorderIcon,
  AccessTime as AccessTimeIcon,
  PersonOutline as PersonOutlineIcon
} from '@mui/icons-material';

const BlogPost = ({ title, content, image, author, date }) => {
  const theme = useTheme();

  return (
    <Grow in={true} timeout={1000}>
      <Card 
        elevation={3}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[10],
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{author[0]}</Avatar>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              {author}
            </Typography>
            <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {content[0]}
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mt: 2 }}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grow>
  );
};

const Blog = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="blog"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={1000}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 6, 
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main,
                margin: '16px auto',
              }
            }}
          >
            Our Blog
          </Typography>
        </Fade>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BlogPost
              title="Discover Ibadan: A Blend of Tradition and Modernity"
              content={[
                "Ibadan, the capital of Oyo State, Nigeria, is a city steeped in history and culture. It is known for its ancient landmarks, bustling markets, and vibrant arts scene. From the historic Cocoa House to the serene Agodi Gardens, Ibadan offers a unique blend of tradition and modernity that appeals to both residents and visitors alike."
              ]}
              image="https://example.com/ibadan-image.jpg"
              author="John Doe"
              date="May 15, 2023"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <BlogPost
              title="Life at Wakimi Hostel"
              content={[
                "Wakimi Hostel is more than just a place to stay; it's a community. Our modern amenities, including a gym, game center, and 24/7 security, ensure that you have a comfortable and safe experience. Our dedicated staff is always here to help you with any needs you may have, from housekeeping to local recommendations."
              ]}
              image="https://example.com/wakimi-hostel-image.jpg"
              author="Jane Smith"
              date="May 10, 2023"
            />
          </Grid>

          <Grid item xs={12}>
            <Grow in={true} timeout={1500}>
              <Card elevation={3} sx={{ mt: 4, p: 3 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                    Tips for a Great Stay at Wakimi Hostel
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Whether you're a student, professional, or traveler, Wakimi Hostel offers the perfect environment for a productive and enjoyable stay. Here are some tips to help you make the most of your time with us:
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      "Stay Active: Make use of our state-of-the-art gym to stay fit and healthy.",
                      "Explore Ibadan: Take advantage of our prime location to visit nearby attractions and immerse yourself in the local culture.",
                      "Join Events: Participate in our community events to meet new people and make lasting memories.",
                      "Stay Connected: Follow us on social media for the latest updates and special offers."
                    ].map((tip, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <StarBorderIcon color="secondary" sx={{ mr: 1 }} />
                              <Typography variant="h6" component="h4">
                                Tip {index + 1}
                              </Typography>
                            </Box>
                            <Typography variant="body2">{tip}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Chip
            label="More Articles Coming Soon!"
            color="primary"
            variant="outlined"
            sx={{ fontSize: '1rem', py: 3, px: 2 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;