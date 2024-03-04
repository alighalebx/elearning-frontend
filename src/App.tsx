import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentForm from './components/StudentForm';
import ProfessorForm from './components/ProfessorForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-student" element={<StudentForm />} />
          <Route path="/create-professor" element={<ProfessorForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
