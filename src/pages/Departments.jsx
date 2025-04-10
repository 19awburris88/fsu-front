import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Array of department objects
const departments = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Exploring the world of algorithms and data structures.',
    image: 'src/assets/computer-science.jpg',
    contact: 'cs@university.edu',
  },
  {
    id: 2,
    name: 'Business Administration',
    description: 'Understanding the dynamics of business and management.',
    image: 'src/assets/business-administration.webp',
    contact: 'ba@university.edu',
  },
  {
    id: 3,
    name: 'Mechanical Engineering',
    description: 'Designing and analyzing mechanical systems.',
    image: 'src/assets/mechanical-engineering.jpg',
    contact: 'me@university.edu',
  },
  {
    id: 4,
    name: 'Psychology',
    description: 'Studying the human mind and behavior.',
    image: 'src/assets/psychology.webp',
    contact: 'psych@university.edu',
  },
  {
    id: 5,
    name: 'Biology',
    description: 'Exploring living organisms and life processes.',
    image: 'src/assets/biology.jpg',
    contact: 'bio@university.edu',
  },
  {
    id: 6,
    name: 'Art and Design',
    description: 'Fostering creativity and visual communication.',
    image: 'src/assets/art-and-design.jpg',
    contact: 'art@university.edu',
  },
  {
    id: 7,
    name: 'Environmental Science',
    description: 'Understanding and protecting our environment.',
    image: 'src/assets/environmental-science.jpg',
    contact: 'envsci@university.edu',
  },
  {
    id: 8,
    name: 'Mathematics',
    description: 'Delving into the world of numbers and theories.',
    image: 'src/assets/mathematics.jpeg',
    contact: 'math@university.edu',
  },
];

export default function Departments() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
        Academic Departments
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {departments.map((dept) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dept.id}>
            <Card
              sx={{
                height: 400,
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px) scale(1.05)', // Lifts and slightly scales the card
                  boxShadow: 8,
                  cursor: 'pointer',
                },
              }}
            >
              <CardMedia
                component="img"
                image={dept.image}
                alt={dept.name}
                sx={{
                  height: 165,
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 0.9, // Adds slight transparency on hover
                  },
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x180?text=Image+Unavailable';
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {dept.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {dept.description}
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ mt: 1 }}>
                  📧 {dept.contact}
                </Typography>
              </CardContent>
              <Button
                component={Link}
                to={`/faculty?department=${dept.id}`}
                variant="contained"
                sx={{ m: 2 }}
              >
                View Faculty
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
