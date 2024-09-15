// SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      // Fetch search results from your API or filter locally
      axios
        .get(`http://localhost:5000/api/search?q=${query}`)
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
