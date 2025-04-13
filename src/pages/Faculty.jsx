import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CardActionArea,
  Avatar,
  Box,
} from '@mui/material';
import API from '../api/axios';

export default function Faculty() {
  const [searchParams] = useSearchParams();
  const departmentId = searchParams.get('department');
  const [professors, setProfessors] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const url = departmentId ? `/professors?departmentId=${departmentId}` : '/professors';
        const res = await API.get(url);
        setProfessors(res.data);
      } catch (err) {
        console.error('Failed to fetch professors:', err);
      }
    };
    fetchProfessors();
  }, [departmentId]);

  const handleOpen = (prof) => {
    setSelectedProfessor(prof);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProfessor(null);
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {professors.map((prof) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={dept.id}>
            <Card
              sx={{
                width: 250,
                height: 400,
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
              <CardActionArea onClick={() => handleOpen(prof)} sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%' }}>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Avatar
                      src={prof.profileImage}
                      alt={prof.name}
                      sx={{
                        width: 100,
                        height: 100,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Typography variant="h6" fontWeight={600} align="center">
                      {prof.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {prof.department ? prof.department.name : 'N/A'}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
  
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedProfessor && (
          <>
            <DialogTitle>{selectedProfessor.name}</DialogTitle>
            <DialogContent dividers>
              <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <Avatar
                  src={selectedProfessor.profileImage}
                  alt={selectedProfessor.name}
                  sx={{
                    width: 120,
                    height: 120,
                  }}
                />
                <Typography variant="subtitle1" fontWeight={500}>
                  Department: {selectedProfessor.department ? selectedProfessor.department.name : 'N/A'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {selectedProfessor.email}
                </Typography>
                <DialogContentText sx={{ mt: 2 }}>
                  {selectedProfessor.bio}
                </DialogContentText>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
