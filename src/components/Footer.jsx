import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper, // Use theme background color
        color: theme.palette.text.primary, // Use theme text color
        py: 3,
        mt: 5,
        borderTop: `1px solid ${theme.palette.divider}`, // Use theme divider color
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          Fullstack University • 1234 Campus Drive • Techville, TX 75001
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          &copy; {new Date().getFullYear()} Fullstack University. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
