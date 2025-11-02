import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const learningPathways = [
    {
      title: 'Early Learners',
      icon: '👶',
      color: '#ff6b9d',
      description: 'Fun and interactive learning for ages 3-6',
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
    },
    {
      title: 'K-12',
      icon: '📚',
      color: '#4ecdc4',
      description: 'Comprehensive education from kindergarten to high school',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
    },
    {
      title: 'Higher Education',
      icon: '🎓',
      color: '#a8e6cf',
      description: 'University-level courses and degrees',
      gradient: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
    },
    {
      title: 'Professional Development',
      icon: '💼',
      color: '#ffd93d',
      description: 'Career advancement and skill-building programs',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
    },
  ];

  const features = [
    {
      title: 'Expert Faculty',
      icon: '👨‍🏫',
      description: 'Learn from world-class educators with decades of experience',
      link: '/faculty',
    },
    {
      title: 'Flexible Timings',
      icon: '⏰',
      description: 'Study at your own pace with 24/7 access to course materials',
    },
    {
      title: 'Affordable Pricing',
      icon: '💰',
      description: 'Quality education starting from ₹500 per month',
      link: '/pricing',
    },
  ];

  const timelineSteps = [
    { step: 1, title: 'Enroll', description: 'Choose your learning pathway' },
    { step: 2, title: 'Connect', description: 'Join a small learning pod' },
    { step: 3, title: 'Learn', description: 'Engage in interactive sessions' },
    { step: 4, title: 'Grow', description: 'Achieve your goals and advance' },
  ];

  const handlePathwayClick = (pathway) => {
    setSelectedPathway(pathway);
    setShowModal(true);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-3d">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 215, 0, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.8)',
                '0 0 20px rgba(255, 215, 0, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Global Classroom
          </motion.h1>
          
          <motion.p
            className="hero-slogan"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Your future, online. Your future, global.
          </motion.p>

          <div className="hero-badges">
            <motion.span
              className="badge-3d"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              🇮🇳 Proudly Indian
            </motion.span>
            <motion.span
              className="badge-3d"
              whileHover={{ scale: 1.1, rotateY: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              🌍 Globally Connected
            </motion.span>
          </div>

          <motion.div
            className="hero-globe"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            🌐
          </motion.div>

          <div className="hero-cta">
            <motion.button
              className="btn-3d btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Explore Learning Pathways
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/pricing"
            >
              View Pricing →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Learning Pathways */}
      <section id="pathways" className="section-3d">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Choose Your Learning Pathway
        </motion.h2>

        <div className="pathways-grid">
          {learningPathways.map((pathway, index) => (
            <motion.div
              key={index}
              className="pathway-card-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -20,
                rotateY: 15,
                rotateX: 5,
              }}
              onClick={() => handlePathwayClick(pathway)}
            >
              <div className="card-front" style={{ background: pathway.gradient }}>
                <div className="card-icon">{pathway.icon}</div>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
              </div>
              <div className="card-back"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Pods Section */}
      <section className="section-3d pods-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Small-Group Learning Pods
        </motion.h2>
        
        <motion.p
          className="section-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Experience personalized education in intimate learning environments of 5-8 students.
          Get individual attention, collaborative learning, and peer support in our innovative pod system.
        </motion.p>

        <div className="pods-features">
          <motion.div
            className="pod-feature"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="feature-icon">👥</span>
            <p>5-8 Students per Pod</p>
          </motion.div>
          <motion.div
            className="pod-feature"
            whileHover={{ scale: 1.1, rotateY: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="feature-icon">❤️</span>
            <p>Personalized Attention</p>
          </motion.div>
          <motion.div
            className="pod-feature"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="feature-icon">💡</span>
            <p>Collaborative Learning</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-3d">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose The Global Classroom?
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -15,
                rotateY: 10,
                rotateX: 5,
              }}
              onClick={() => feature.link && (window.location.href = feature.link)}
              style={{ cursor: feature.link ? 'pointer' : 'default' }}
            >
              <div className="feature-icon-large">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.link && (
                <span className="feature-link">Learn more →</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-3d timeline-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Your Learning Journey
        </motion.h2>

        <div className="timeline-3d">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              className="timeline-step"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.2, rotateY: 15 }}
            >
              <div className="step-number">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              {index < timelineSteps.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pod Dashboard */}
      <section className="section-3d">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Pod Formation Dashboard
        </motion.h2>

        <motion.div
          className="pod-dashboard-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateY: 5, rotateX: 5 }}
        >
          <h3>Join a Learning Pod</h3>
          <div className="dashboard-stats">
            <div className="stat-item">
              <p>Pod Capacity</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <span>3/5 spots filled</span>
            </div>
            <div className="stat-item">
              <p>Next Session</p>
              <div className="calendar-icon">📅</div>
              <span>Tomorrow 2 PM IST</span>
            </div>
          </div>
          <div className="dashboard-actions">
            <motion.button
              className="btn-3d btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/pricing"
            >
              👥 Join This Pod
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/about"
            >
              Learn More →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-3d cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Ready to Start Your Global Journey?</h2>
          <p>
            Join thousands of learners worldwide in our innovative small-group learning pods.
            Your future starts here.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="btn-3d btn-primary btn-large"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/pricing"
            >
              🚀 Get Started Today
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary btn-large"
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/faculty"
            >
              👨‍🏫 Meet Our Faculty →
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary btn-large"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/about"
            >
              ⭐ About Us →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {showModal && selectedPathway && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal-3d"
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2>{selectedPathway.title}</h2>
            <p>{selectedPathway.description}</p>
            <div className="modal-tips">
              <h4>Quick Tips:</h4>
              <ul>
                <li>Engage actively in pod discussions</li>
                <li>Complete assignments on time</li>
                <li>Network with fellow learners</li>
                <li>Utilize 24/7 support resources</li>
              </ul>
            </div>
            <motion.button
              className="btn-3d btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(false)}
            >
              Start Learning
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
