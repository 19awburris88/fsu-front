import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';

export function DepartmentDetail() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const res = await API.get(`/departments/${id}`);
        setDepartment(res.data);
      } catch (err) {
        console.error('Failed to fetch department:', err);
      }
    };
    fetchDepartment();
  }, [id]);

  if (!department) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h3">{department.name}</Typography>
      <img src={department.bannerImage} alt={department.name} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="body1">{department.description}</Typography>
      <Typography variant="body2">Contact: {department.contactInfo}</Typography>
      <Typography variant="h4">Faculty</Typography>
      <Grid container spacing={2}>
        {department.professors.map((prof) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={prof.id}>
            <Card>
              <CardContent>
                <Avatar src={prof.profileImage} alt={prof.name} />
                <Typography variant="h6">{prof.name}</Typography>
                <Typography variant="body2">{prof.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
