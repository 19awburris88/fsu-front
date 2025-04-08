import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function AdminPanel() {
  const [departments, setDepartments] = useState([]);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");
  const [departmentBannerImage, setDepartmentBannerImage] = useState("");
  const [professors, setProfessors] = useState([]);

  // Add a new department
  const addDepartment = () => {
    const newDepartment = {
      id: Date.now(),
      name: departmentName,
      description: departmentDescription,
      bannerImage: departmentBannerImage,
      professors: [],
    };
    setDepartments([...departments, newDepartment]);
    setDepartmentName(""); // Clear inputs
    setDepartmentDescription("");
    setDepartmentBannerImage("");
  };

  // Remove department
  const removeDepartment = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  // Add professor
  const addProfessor = (name, email, bio, profileImage, departmentId) => {
    const newProfessor = {
      id: Date.now(),
      name,
      email,
      bio,
      profileImage,
      departmentId,
    };
    setProfessors([...professors, newProfessor]);
  };

  // Remove professor
  const removeProfessor = (id) => {
    setProfessors(professors.filter((prof) => prof.id !== id));
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      {/* === Departments Section === */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Departments</Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <TextField
            label="Name"
            fullWidth
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            value={departmentDescription}
            onChange={(e) => setDepartmentDescription(e.target.value)}
          />
          <TextField
            label="Banner Image URL"
            fullWidth
            value={departmentBannerImage}
            onChange={(e) => setDepartmentBannerImage(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={addDepartment}
            sx={{
              padding: "0px 26px",
              fontSize: "12px",
            }}
          >
            Add Department
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {departments.map((dept) => (
            <Grid item key={dept.id} xs={12} md={6} lg={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{dept.name}</Typography>
                <Typography variant="body2">{dept.description}</Typography>
                <img
                  src={dept.bannerImage}
                  alt={dept.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: 8,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                    mt: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => removeDepartment(dept.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* === Professors Section === */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Professors</Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" />
          <TextField label="Email" />
          <TextField label="Bio" />
          <TextField label="Profile Image URL" />
          <TextField label="Department ID" />
          <Button
            variant="contained"
            onClick={() =>
              addProfessor(
                "Prof Test",
                "test@university.edu",
                "Great bio",
                "https://via.placeholder.com/100",
                departments[0]?.id || 1
              )
            }
          >
            Add Professor
          </Button>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {professors.map((prof) => (
            <Grid item key={prof.id} xs={12} md={6} lg={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{prof.name}</Typography>
                <Typography variant="body2">{prof.email}</Typography>
                <Typography variant="body2">{prof.bio}</Typography>
                <img
                  src={prof.profileImage}
                  alt={prof.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: 8,
                  }}
                />
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}
                >
                  <IconButton
                    size="small"
                    onClick={() => removeProfessor(prof.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
