// src/components/GardenEvent.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const GardenEvent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/gardenevents');
            setEvents(response.data);
        };

        fetchEvents();
    }, []);

    if (!events.length) {
        return <div>No garden events found.</div>;
    }

    return (
        <div>
            <h1>Garden Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <h2>{event.eventName}</h2>
                        <p>Location: {event.location}</p>
                        <p>Description: {event.description}</p>
                        <p>Date: {event.dateValue}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};export default GardenEvent;
