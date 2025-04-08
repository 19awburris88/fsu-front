import React, { useState } from 'react';
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
  Box
} from '@mui/material';
import { generateFakeDepartments } from '../utils/fakeData';

const departments = generateFakeDepartments();

export default function Faculty() {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (professor) => {
    setSelectedProfessor(professor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProfessor(null);
  };

  // Flatten all professors and attach departmentName
  const professors = departments.flatMap((dept) =>
    dept.professors.map((prof) => ({
      ...prof,
      departmentName: dept.name,
    }))
  );

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {professors.map((prof) => (
          <Grid item key={prof.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                width: 250,
                height: 400,
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <CardActionArea onClick={() => handleOpen(prof)} sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%' }}>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Avatar
                      src={prof.image}
                      alt={prof.name}
                      sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="h6" fontWeight={600} align="center">
                      {prof.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {prof.departmentName}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedProfessor && (
          <>
            <DialogTitle>{selectedProfessor.name}</DialogTitle>
            <DialogContent dividers>
              <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <Avatar
                  src={selectedProfessor.image}
                  alt={selectedProfessor.name}
                  sx={{ width: 120, height: 120 }}
                />
                <Typography variant="subtitle1" fontWeight={500}>
                  Department: {selectedProfessor.departmentName}
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
