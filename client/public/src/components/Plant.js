// src/components/Plant.js
import React, { useEffect, useState } from 'react';
import axios from '../../axios';

const Plant = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            const response = await axios.get('/plants');
            setPlants(response.data);
        };

        fetchPlants();
    }, []);

    if (!plants.length) {
        return <div>No plants found.</div>;
    }

    return (
        <div>
            <h1>Plants</h1>
            <ul>
                {plants.map(plant => (
                    <li key={plant._id}>
                        <h2>{plant.name}</h2>
                        <p>Species: {plant.species}</p>
                        <p>Care Instructions: {plant.careInstructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Plant;
