import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Subjects.css';

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/subjects');
      setSubjects(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch subjects:', error);
    } finally {
      setLoading(false);
    }
  };

  const subjectIcons = {
    'Mathematics': '🔢',
    'Science': '🔬',
    'SST': '🌍',
    'English': '📖',
    'Hindi': '🏠',
  };

  if (loading) return <div className="loading">Loading subjects...</div>;

  return (
    <div className="subjects">
      <h1>Subjects</h1>
      <p>Choose a subject to get started</p>

      <div className="subjects-grid">
        {['Mathematics', 'Science', 'SST', 'English', 'Hindi'].map((subject) => (
          <div key={subject} className="subject-card">
            <div className="subject-icon">{subjectIcons[subject]}</div>
            <h2>{subject}</h2>
            <p>Master all chapters and concepts</p>
            <button className="btn btn-primary">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
