import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// TODO: Import pages
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Subjects from './pages/Subjects';
// import DoubtForum from './pages/DoubtForum';

function App() {
  return (
    <Router>
      <div className="App">
        {/* TODO: Add Navigation component */}
        <Routes>
          <Route path="/" element={<h1>V2 Education - Welcome</h1>} />
          {/* TODO: Add routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
