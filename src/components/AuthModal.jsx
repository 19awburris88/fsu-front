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
import { useNavigate } from "react-router-dom";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState(0);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => setTab(newValue);

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin");
      onClose();
    }
  };

  const handleRegister = () => {
    if (
      regName &&
      regEmail &&
      regPassword &&
      regPassword === regConfirmPassword
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin");
      onClose();
    }
  };

  const fieldStyles = {
    input: { color: "#fff" },
    label: { color: "#aaa" },
    field: {
      "& .MuiInputBase-root": {
        color: "#fff",
      },
      "& .MuiInputLabel-root": {
        color: "#aaa",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#555" },
        "&:hover fieldset": { borderColor: "#888" },
        "&.Mui-focused fieldset": { borderColor: "#fff" },
      },
    },
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        textAlign="center"
        sx={{ backgroundColor: "#1e1e1e", color: "#fff" }}
      >
        {tab === 0 ? "Login" : "Register"}
      </DialogTitle>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        centered
        sx={{
          backgroundColor: "#121212",
          "& .MuiTabs-indicator": { backgroundColor: "#fff" },
          "& .MuiTab-root": { color: "#aaa" },
          "& .Mui-selected": { color: "#fff" },
        }}
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      <DialogContent sx={{ backgroundColor: "#1e1e1e", pb: 4 }}>
        {tab === 0 ? (
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              sx={fieldStyles.field}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              sx={fieldStyles.field}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Log In
            </Button>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <TextField
              label="Full Name"
              fullWidth
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              sx={fieldStyles.field}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              sx={fieldStyles.field}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              sx={fieldStyles.field}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleRegister}
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
