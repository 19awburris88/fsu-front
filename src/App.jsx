import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Departments from "./pages/Departments";
import Faculty from "./pages/Faculty";
import AdminPanel from "./pages/Admin";
import { DepartmentDetail } from "./pages/DepartmentDetail";

function App() {
  // Check admin login status from localStorage
  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Container sx={{ flex: 1, mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/departments" />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route
            path="/admin"
            element={isLoggedIn ? <AdminPanel /> : <Navigate to="/" />}
          />
        </Routes>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
