import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
      </Toolbar>
    </AppBar>
  );
}
