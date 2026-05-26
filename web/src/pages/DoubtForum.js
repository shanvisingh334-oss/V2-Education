import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DoubtForum.css';

function DoubtForum() {
  const [doubts, setDoubts] = useState([]);
  const [filter, setFilter] = useState('open');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    chapter: '',
  });

  useEffect(() => {
    fetchDoubts();
  }, [filter]);

  const fetchDoubts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/doubts?status=${filter}`
      );
      setDoubts(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch doubts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/doubts', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ title: '', description: '', subject: '', chapter: '' });
      setShowForm(false);
      fetchDoubts();
    } catch (error) {
      console.error('Failed to post doubt:', error);
    }
  };

  if (loading) return <div className="loading">Loading doubts...</div>;

  return (
    <div className="doubt-forum">
      <div className="forum-header">
        <h1>Doubt Forum</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Ask Doubt'}
        </button>
      </div>

      {showForm && (
        <form className="doubt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title of your doubt"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Describe your doubt in detail"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="SST">SST</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Post Doubt
          </button>
        </form>
      )}

      <div className="filters">
        {['open', 'answered', 'closed'].map((status) => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? 'active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="doubts-list">
        {doubts.length === 0 ? (
          <p>No doubts found</p>
        ) : (
          doubts.map((doubt) => (
            <div key={doubt._id} className="doubt-card">
              <h3>{doubt.title}</h3>
              <p>{doubt.description}</p>
              <div className="doubt-meta">
                <span>📚 {doubt.subject}</span>
                <span>👤 {doubt.author?.name}</span>
                <span className={`status status-${doubt.status}`}>
                  {doubt.status}
                </span>
              </div>
              {doubt.answer && (
                <div className="doubt-answer">
                  <p><strong>Answer:</strong> {doubt.answer}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoubtForum;
