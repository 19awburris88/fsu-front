import React, { useEffect, useState } from 'react';
import { generateFakeDepartments } from '../utils/fakeData';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const data = generateFakeDepartments(5);
    setDepartments(data);
  }, []);

  return (
    <Grid container spacing={3}>
      {departments.map((dept) => (
        <Grid item xs={12} md={6} lg={4} key={dept.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={dept.image}
              alt={dept.name}
            />
            <CardContent>
              <Typography variant="h5">{dept.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {dept.description}
              </Typography>
              <Typography variant="caption">{dept.contact}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
