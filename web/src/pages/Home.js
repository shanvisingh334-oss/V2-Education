import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundPositionY: scrollY * 0.5 }}>
        <div className="hero-content">
          <h1>Welcome to V2 Education</h1>
          <p>Master CBSE Class 10 with comprehensive learning resources</p>
          <div className="hero-buttons">
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Curriculum</h3>
            <p>All subjects for CBSE Class 10 with video lessons and notes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Chapterwise Quizzes</h3>
            <p>Practice with interactive quizzes and mock exams</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Doubt Forum</h3>
            <p>Post doubts and get expert answers from admins</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracker</h3>
            <p>Monitor your learning with detailed analytics</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to start learning?</h2>
        <p>Join thousands of students mastering CBSE Class 10</p>
        <Link to="/auth/register" className="btn btn-primary btn-large">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
