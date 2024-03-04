import React, { useState } from 'react';
import { createUser } from '../api';

const ProfessorForm: React.FC = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'professor',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(userData);
      alert('Professor profile created successfully!');
      // Optionally, redirect to another page or perform any other action after successful creation
    } catch (error) {
      console.error('Error creating professor profile:', error);
      alert('An error occurred while creating the professor profile. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Professor Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={userData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={userData.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfessorForm;
