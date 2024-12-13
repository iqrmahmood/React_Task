import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tickets from './components/Tickets';
import './App.css';

const Home = () => (
  <div className="home">
    <h2>Welcome to Coding Competitions</h2>
    <p>Manage tickets and explore upcoming events!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
};

export default App;
