// src/components/WeatherComponent.jsx
import React, { useState, useEffect } from 'react';
import { getCurrentWeather } from '../weatherService';
import { Card, CardContent, Typography, Box, CircularProgress, TextField } from '@mui/material';
import { styled } from '@mui/system';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherBox = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  maxWidth: 350,
  margin: '20px auto',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const WeatherComponent = () => {
  const [location, setLocation] = useState('Tunisia'); // Default location
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await getCurrentWeather(location);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Unable to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Weather in {location}
      </Typography>
      
     

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : weatherData ? (
        <WeatherBox>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <CloudIcon sx={{ fontSize: 50, color: '#4CAF50' }} />
              <Typography variant="h5" sx={{ ml: 2 }}>
                {weatherData.current.weather_descriptions[0]}
              </Typography>
            </Box>

            <Typography variant="h6">
              {weatherData.current.temperature}°C
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Humidity: {weatherData.current.humidity}%
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Wind Speed: {weatherData.current.wind_speed} km/h
            </Typography>
          </CardContent>
        </WeatherBox>
      ) : (
        <Typography>No weather data available</Typography>
      )}
    </Box>
  );
};

export default WeatherComponent;
