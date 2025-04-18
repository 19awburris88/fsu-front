import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  Paper,
  IconButton,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import API from "../api/axios";

export default function AdminPanel() {
  const [departments, setDepartments] = useState([]);
  const [professors, setProfessors] = useState([]);

  // Department form
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");
  const [departmentBannerImage, setDepartmentBannerImage] = useState("");
  const [error, setError] = useState("");

  // Professor form
  const [professorName, setProfessorName] = useState("");
  const [professorEmail, setProfessorEmail] = useState("");
  const [professorBio, setProfessorBio] = useState("");
  const [professorProfileImage, setProfessorProfileImage] = useState("");
  const [professorDepartmentId, setProfessorDepartmentId] = useState("");
  const [professorError, setProfessorError] = useState("");

  // Fetch all departments on load
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await API.get("/departments");
        setDepartments(res.data);
      } catch (err) {
        console.error("Failed to fetch departments", err);
      }
    };
    fetchDepartments();
  }, []);

  // Fetch all professors on load
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const res = await API.get("/professors");
        setProfessors(res.data);
      } catch (err) {
        console.error("Failed to fetch professors", err);
      }
    };
    fetchProfessors();
  }, []);

  const addDepartment = async () => {
    if (!departmentName || !departmentDescription || !departmentBannerImage) {
      setError("All department fields are required!");
      return;
    }
    try {
      const res = await API.post("/departments", {
        name: departmentName,
        description: departmentDescription,
        bannerImage: departmentBannerImage,
        contactInfo: "admin@school.edu",
      });
      setDepartments([...departments, res.data]);
      setDepartmentName("");
      setDepartmentDescription("");
      setDepartmentBannerImage("");
      setError("");
    } catch (err) {
      console.error("Failed to create department", err);
    }
  };

  const removeDepartment = async (id) => {
    try {
      await API.delete(`/departments/${id}`);
      setDepartments(departments.filter((d) => d.id !== id));
    } catch (err) {
      console.error("Delete department failed", err);
    }
  };

  const addProfessor = async () => {
    if (
      !professorName ||
      !professorEmail ||
      !professorBio ||
      !professorProfileImage ||
      !professorDepartmentId
    ) {
      setProfessorError("All professor fields are required!");
      return;
    }

    try {
      const res = await API.post("/professors", {
        name: professorName,
        email: professorEmail,
        bio: professorBio,
        profileImage: professorProfileImage,
        departmentId: Number(professorDepartmentId),
      });
      setProfessors([...professors, res.data]);
      setProfessorName("");
      setProfessorEmail("");
      setProfessorBio("");
      setProfessorProfileImage("");
      setProfessorDepartmentId("");
      setProfessorError("");
    } catch (err) {
      console.error("Failed to create professor", err);
    }
  };

  const removeProfessor = async (id) => {
    try {
      await API.delete(`/professors/${id}`);
      setProfessors(professors.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete professor failed", err);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      {/* === Departments Section === */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Departments</Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2, flexDirection: "row" }}>
          {error && <Alert severity="error">{error}</Alert>}
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
            sx={{ padding: "0px 30px", fontSize: "12px" }}
          >
            Add Department
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {departments.map((dept) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dept.id}>
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
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 1 }}
                >
                  <IconButton size="small" onClick={() => removeDepartment(dept.id)}>
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
          {professorError && <Alert severity="error">{professorError}</Alert>}
          <TextField
            label="Name"
            fullWidth
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            value={professorEmail}
            onChange={(e) => setProfessorEmail(e.target.value)}
          />
          <TextField
            label="Bio"
            fullWidth
            value={professorBio}
            onChange={(e) => setProfessorBio(e.target.value)}
          />
          <TextField
            label="Profile Image URL"
            fullWidth
            value={professorProfileImage}
            onChange={(e) => setProfessorProfileImage(e.target.value)}
          />
          <TextField
            label="Department ID"
            fullWidth
            value={professorDepartmentId}
            onChange={(e) => setProfessorDepartmentId(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={addProfessor}
            sx={{ padding: "10px 26px", fontSize: "12px" }}
          >
            Add Professor
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {professors.map((prof) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={prof.id}>
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
                  <IconButton size="small" onClick={() => removeProfessor(prof.id)}>
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
