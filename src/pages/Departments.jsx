import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

// Sample data for 8 departments
const departments = [
  {
    id: 1,
    name: 'Computer Science',
    description: 'Exploring the world of algorithms and data structures.',
    image: '/assets/computer-science.jpg',
    contact: 'cs@university.edu',
  },
  {
    id: 2,
    name: 'Business Administration',
    description: 'Understanding the dynamics of business and management.',
    image: '/assets/business-administration.jpg',
    contact: 'ba@university.edu',
  },
  {
    id: 3,
    name: 'Mechanical Engineering',
    description: 'Designing and analyzing mechanical systems.',
    image: '/assets/mechanical-engineering.jpg',
    contact: 'me@university.edu',
  },
  {
    id: 4,
    name: 'Psychology',
    description: 'Studying the human mind and behavior.',
    image: '/assets/psychology.jpg',
    contact: 'psych@university.edu',
  },
  {
    id: 5,
    name: 'Biology',
    description: 'Exploring living organisms and life processes.',
    image: '/assets/biology.jpg',
    contact: 'bio@university.edu',
  },
  {
    id: 6,
    name: 'Art and Design',
    description: 'Fostering creativity and visual communication.',
    image: '/assets/art-and-design.jpg',
    contact: 'art@university.edu',
  },
  {
    id: 7,
    name: 'Environmental Science',
    description: 'Understanding and protecting our environment.',
    image: '/assets/environmental-science.jpg',
    contact: 'envsci@university.edu',
  },
  {
    id: 8,
    name: 'Mathematics',
    description: 'Delving into the world of numbers and theories.',
    image: '/assets/mathematics.jpg',
    contact: 'math@university.edu',
  },
];

export default function Departments() {
  return (
    <Container>
      <Grid container spacing={4}>
        {departments.map((dept) => (
          <Grid item xs={12} sm={6} key={dept.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={dept.image}
                alt={dept.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {dept.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dept.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact: {dept.contact}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
