import React, { useState } from 'react';
import axios from '../axios';  // Ensure axios is configured with the correct baseURL
import { Container, Typography, TextField, Button, Box, Link, Grid } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/login', {
        email: email.trim(),  // Trim whitespace from email
        password: password.trim()  // Trim whitespace from password
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        LOGIN
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Link href="#" sx={{ mb: 2, color: '#e76e55', textDecoration: 'none' }}>
          Forgot your password?
        </Link>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            bgcolor: '#e76e55',
            color: '#ffffff',
            textTransform: 'none',
            mb: 2,
          }}
        >
          Sign in
        </Button>
        <Link href="#" sx={{ color: '#e76e55', textDecoration: 'none' }}>
          Create account
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
