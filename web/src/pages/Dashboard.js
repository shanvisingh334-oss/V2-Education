import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      setStats({
        quizzesCompleted: 12,
        quizzesScored: 85,
        doubltsAnswered: 5,
        subjectsSelected: 5,
      });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.name}</h1>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Quizzes Completed</h3>
          <p className="stat-value">{stats.quizzesCompleted}</p>
        </div>
        <div className="stat-card">
          <h3>Average Score</h3>
          <p className="stat-value">{stats.quizzesScored}%</p>
        </div>
        <div className="stat-card">
          <h3>Doubts Asked</h3>
          <p className="stat-value">{stats.doubltsAnswered}</p>
        </div>
        <div className="stat-card">
          <h3>Subjects</h3>
          <p className="stat-value">{stats.subjectsSelected}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <a href="/subjects" className="action-card">
            📚 Browse Subjects
          </a>
          <a href="/quizzes" className="action-card">
            ✅ Take Quiz
          </a>
          <a href="/doubts" className="action-card">
            💬 Ask Doubt
          </a>
          <a href="/profile" className="action-card">
            👤 Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
