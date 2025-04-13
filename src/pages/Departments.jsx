import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import API from '../api/axios';

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await API.get('/departments');
        setDepartments(res.data);
      } catch (err) {
        console.error('Failed to fetch departments:', err);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
        Academic Departments
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {departments.map((dept) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={dept.id}>
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
                  transform: 'translateY(-10px) scale(1.05)',
                  boxShadow: 8,
                  cursor: 'pointer',
                },
              }}
            >
              <CardMedia
                component="img"
                image={dept.bannerImage}
                alt={dept.name}
                sx={{
                  height: 165,
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 0.9,
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
                  📧 {dept.contactInfo}
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
