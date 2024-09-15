import React, { useState } from 'react';
import axios from '../axios';  // Ensure axios is configured with the correct baseURL
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email.trim(),  // Trim whitespace from email
        password: password.trim(), // Trim whitespace from password
      });
      
      console.log('Login successful:', response.data);

      // Set the user data and token after successful login
      setUser(response.data.user); // Assuming user info is sent back in response
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user in localStorage

      // Check if the user is admin
      const isAdmin = response.data.user.isAdmin;

      // Set global login state in App
      setIsLoggedIn(true);

      // Navigate to different routes based on admin status
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      setError('Error logging in: ' + (error.response?.data?.message || error.message));
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
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default Login;
