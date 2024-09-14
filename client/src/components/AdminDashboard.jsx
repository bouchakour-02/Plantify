import React from 'react';
import { Link } from 'react-router-dom';
import '../AdminDashboard.css'; // Add custom styles if needed

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-sections">
        <Link to="/admin/users" className="dashboard-link">
          <div className="dashboard-card">
            <h3>Manage Users</h3>
          </div>
        </Link>
        <Link to="/admin/products" className="dashboard-link">
          <div className="dashboard-card">
            <h3>Manage Products</h3>
          </div>
        </Link>
        <Link to="/admin/orders" className="dashboard-link">
          <div className="dashboard-card">
            <h3>Manage Orders</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
