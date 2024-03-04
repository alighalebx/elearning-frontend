import React, { useState } from 'react';
import { createUser } from '../api';

const StudentForm: React.FC = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(userData);
      alert('Student profile created successfully!');
      // Optionally, redirect to another page or perform any other action after successful creation
    } catch (error) {
      console.error('Error creating student profile:', error);
      alert('An error occurred while creating the student profile. Please try againnn.');
    }
  };

  return (
    <div>
      <h2>Create Student Profile</h2>
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

export default StudentForm;