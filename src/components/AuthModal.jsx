import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => setTab(newValue);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center">
        {tab === 0 ? "Login" : "Register"}
      </DialogTitle>

      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      <DialogContent>
        {tab === 0 ? (
          // Login Form
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <Button variant="contained" fullWidth>
              Log In
            </Button>
          </Box>
        ) : (
          // Register Form
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Full Name" fullWidth />
            <TextField label="Email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <TextField label="Confirm Password" type="password" fullWidth />
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
