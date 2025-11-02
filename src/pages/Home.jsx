import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Handle modal scroll and body scroll lock
  useEffect(() => {
    if (showModal) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Scroll to top to ensure modal is visible
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const learningPathways = [
    {
      title: 'Early Learners',
      icon: '👶',
      color: '#ff6b9d',
      description: 'Fun and interactive learning for ages 3-6',
      detailedDescription: 'Designed for young minds, our Early Learners program focuses on play-based learning, creativity, and foundational skills. Through interactive activities, stories, and games, children develop cognitive abilities, social skills, and a love for learning. Our certified early childhood educators create a nurturing environment where every child thrives.',
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
      price: 'Starting at ₹500/month',
      features: ['Interactive play-based activities', 'Small groups of 5-6 students', '3 sessions per week', 'Parent progress tracking', 'Certified early childhood educators', 'Multilingual support'],
    },
    {
      title: 'K-12',
      icon: '📚',
      color: '#4ecdc4',
      description: 'Comprehensive education from kindergarten to high school',
      detailedDescription: 'Our K-12 Foundation program provides comprehensive curriculum coverage from kindergarten through high school. With expert teachers, personalized attention, and flexible scheduling, students excel in all subjects. We prepare students for board exams, competitive tests, and future academic success.',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      price: 'Starting at ₹1,500/month',
      features: ['Complete curriculum coverage', 'Pod size: 6-8 students', '4 sessions per week', 'Homework support', 'Regular assessments', 'Exam preparation'],
    },
    {
      title: 'Higher Education',
      icon: '🎓',
      color: '#a8e6cf',
      description: 'University-level courses and degrees',
      detailedDescription: 'Pursue university-level courses with our Higher Education program. Learn from industry experts and academic professionals. Access project-based learning, career guidance, and certification programs. Perfect for students preparing for higher studies or professionals seeking advanced knowledge.',
      gradient: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
      price: 'Starting at ₹3,000/month',
      features: ['University-level courses', 'Pod size: 5-7 students', '5 sessions per week', 'Project-based learning', 'Career guidance', 'Certificate programs'],
    },
    {
      title: 'Professional Development',
      icon: '💼',
      color: '#ffd93d',
      description: 'Career advancement and skill-building programs',
      detailedDescription: 'Advance your career with our Professional Development courses. Designed for working professionals, our programs focus on practical skills, industry best practices, and networking. Evening and weekend sessions make it easy to upskill while maintaining your work schedule.',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
      price: 'Starting at ₹2,500/month',
      features: ['Skill-based courses', 'Pod size: 6-8 professionals', 'Evening/weekend sessions', 'Networking opportunities', 'Industry case studies', 'Certification upon completion'],
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
    // Scroll to top to show modal
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              onClick={(e) => {
                e.preventDefault();
                const pathwaysSection = document.getElementById('pathways');
                if (pathwaysSection) {
                  pathwaysSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              🚀 Explore Learning Pathways
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                navigate('/pricing');
              }}
            >
              View Pricing →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Learning Pathways */}
      <section id="pathways" className="section-3d" style={{ scrollMarginTop: '80px' }}>
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
              style={{ cursor: feature.link ? 'pointer' : 'default' }}
            >
              <div className="feature-icon-large">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.link ? (
                <Link to={feature.link} className="feature-link">
                  Learn more →
                </Link>
              ) : null}
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
        <div 
          className="modal-overlay" 
          onClick={() => {
            setShowModal(false);
            setSelectedPathway(null);
          }}
        >
          <motion.div
            className="modal-3d"
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={() => {
                setShowModal(false);
                setSelectedPathway(null);
              }}
            >
              ✕
            </button>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {selectedPathway.icon}
              </div>
              <h2>{selectedPathway.title}</h2>
              <p style={{ color: 'var(--accent-yellow)', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                {selectedPathway.price}
              </p>
            </div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {selectedPathway.detailedDescription}
            </p>
            <div className="modal-tips">
              <h4>What's Included:</h4>
              <ul>
                {selectedPathway.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
              {selectedPathway.title === 'Professional Development' ? (
                <motion.button
                  className="btn-3d btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowModal(false);
                    setSelectedPathway(null);
                    navigate('/courses');
                  }}
                >
                  View Courses →
                </motion.button>
              ) : (
                <motion.button
                  className="btn-3d btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowModal(false);
                    setSelectedPathway(null);
                    navigate('/pricing');
                  }}
                >
                  View Pricing →
                </motion.button>
              )}
              <motion.button
                className="btn-3d btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowModal(false);
                  setSelectedPathway(null);
                }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
