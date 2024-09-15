// src/services/weatherService.js
import axios from 'axios';

const WEATHERSTACK_API_KEY = 'd9bf24aa9b23b9ef97a515c42ac5da4c';  // Replace with your WeatherStack API key
const BASE_URL = 'http://api.weatherstack.com';

export const getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/current`, {
      params: {
        access_key: WEATHERSTACK_API_KEY,
        query: location,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getHistoricalWeather = async (location, date) => {
  try {
    const response = await axios.get(`${BASE_URL}/historical`, {
      params: {
        access_key: WEATHERSTACK_API_KEY,
        query: location,
        historical_date: date,  // Format date as YYYY-MM-DD
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching historical weather data:', error);
    throw error;
  }
};
