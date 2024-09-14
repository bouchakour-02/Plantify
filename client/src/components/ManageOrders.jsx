import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="manage-orders">
      <h2>Manage Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id}, Total: ${order.total}, Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrders;
