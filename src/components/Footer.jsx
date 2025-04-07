import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        mt: 5,
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Fullstack University • 1234 Campus Drive • Techville, TX 75001
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          &copy; {new Date().getFullYear()} Fullstack University. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
