import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AuthModal from "./AuthModal"; // Make sure this path is correct

export default function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on load
    const adminStatus = localStorage.getItem("adminLoggedIn");
    setIsLoggedIn(adminStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fullstack University
          </Typography>

          <Button color="inherit" component={Link} to="/departments">
            Departments
          </Button>

          <Button color="inherit" component={Link} to="/faculty">
            Faculty
          </Button>

          <Box sx={{ ml: 2 }}>
            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <IconButton color="inherit" onClick={() => setAuthOpen(true)}>
                <AccountCircleIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
