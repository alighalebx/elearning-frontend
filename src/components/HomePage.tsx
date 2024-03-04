import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // Import CSS file for styling

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to the E-learning Platform</h1>
      {/* Navigation links */}
      <nav className="navigation">
        <ul>
          <li><Link to="/user-management">User Management</Link></li>
          <li><Link to="/course-management">Course Management</Link></li>
          <li><Link to="/grades-management">Grades Management</Link></li>
        </ul>
      </nav>
      {/* Add any additional content you want to display on the homepage */}
    </div>
  );
};

export default HomePage;
