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
import API from "../api/axios"; // ✅ Use axios instance with interceptor

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState(0);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => setTab(newValue);

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        username: loginUsername,
        password: loginPassword,
      });

      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
      onClose();
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error || err.message);
    }
  };

  const handleRegister = async () => {
    if (!regUsername || !regPassword || regPassword !== regConfirmPassword) {
      return;
    }

    try {
      await API.post("/auth/register", {
        username: regUsername,
        password: regPassword,
      });

      // auto-login after register
      const res = await API.post("/auth/login", {
        username: regUsername,
        password: regPassword,
      });

      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
      onClose();
    } catch (err) {
      console.error("Registration failed:", err.response?.data?.error || err.message);
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
              label="Username"
              fullWidth
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
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
              label="Username"
              fullWidth
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
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
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              value={regConfirmPassword}
              onChange={(e) => setRegConfirmPassword(e.target.value)}
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
