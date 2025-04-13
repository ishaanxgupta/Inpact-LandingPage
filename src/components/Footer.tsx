import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import Github from './github';
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#111827',
        color: '#ffffff',
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 8,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          InpactAI
        </Typography>

        <Box display="flex" gap={3} mt={{ xs: 2, md: 0 }}>
          <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#8B5CF6' } }}>
            Home
          </Link>
          <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#8B5CF6' } }}>
            About
          </Link>
          <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#8B5CF6' } }}>
            Contact
          </Link>
          <Link href="#" underline="none" color="inherit" sx={{ '&:hover': { color: '#8B5CF6' } }}>
            Github
          </Link>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />

      <Typography variant="body2" textAlign="center" color="gray">
        © {new Date().getFullYear()} InpactAI. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
