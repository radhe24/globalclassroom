import { motion } from 'framer-motion';
import './Faculty.css';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Priya Sharma',
      subject: 'Mathematics & Physics',
      experience: '15+ years',
      education: 'Ph.D. from IIT Delhi',
      specialties: ['Calculus', 'Quantum Physics', 'Problem Solving'],
      icon: '🔬',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      location: 'New Delhi, India',
      global: 'Taught in 12 countries',
    },
    {
      name: 'Prof. Arjun Mehta',
      subject: 'Computer Science',
      experience: '12+ years',
      education: 'M.S. from Stanford University',
      specialties: ['Programming', 'AI/ML', 'Software Engineering'],
      icon: '💻',
      gradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
      location: 'Bangalore, India',
      global: 'Industry expert, 50+ patents',
    },
    {
      name: 'Dr. Ananya Patel',
      subject: 'English Literature & Language',
      experience: '18+ years',
      education: 'Ph.D. from Oxford University',
      specialties: ['Creative Writing', 'Grammar', 'Critical Analysis'],
      icon: '📖',
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
      location: 'Mumbai, India',
      global: 'Published author, 5 books',
    },
    {
      name: 'Prof. Vikram Singh',
      subject: 'Economics & Business',
      experience: '14+ years',
      education: 'MBA from Harvard Business School',
      specialties: ['Business Strategy', 'Economics', 'Finance'],
      icon: '📊',
      gradient: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
      location: 'Hyderabad, India',
      global: 'Former McKinsey consultant',
    },
    {
      name: 'Dr. Sneha Reddy',
      subject: 'Biology & Chemistry',
      experience: '16+ years',
      education: 'Ph.D. from MIT',
      specialties: ['Organic Chemistry', 'Cell Biology', 'Genetics'],
      icon: '🧪',
      gradient: 'linear-gradient(135deg, #20bf6b 0%, #01a3a4 100%)',
      location: 'Chennai, India',
      global: 'Research published in Nature',
    },
    {
      name: 'Prof. Rajesh Kumar',
      subject: 'History & Social Studies',
      experience: '20+ years',
      education: 'Ph.D. from JNU, Delhi',
      specialties: ['World History', 'Indian History', 'Political Science'],
      icon: '📚',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
      location: 'Kolkata, India',
      global: 'UNESCO consultant',
    },
  ];

  const highlights = [
    { icon: '🏆', title: 'Award-Winning Educators', desc: 'Recognized for excellence in teaching' },
    { icon: '🌍', title: 'Global Perspective', desc: 'International experience and diverse backgrounds' },
    { icon: '🎓', title: 'Top-Tier Education', desc: 'Graduates from world\'s leading universities' },
  ];

  return (
    <div className="faculty-page">
      <section className="faculty-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="page-title"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 215, 0, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.8)',
                '0 0 20px rgba(255, 215, 0, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Meet Our Expert Faculty
          </motion.h1>
          <p className="page-subtitle">
            World-class educators from India and around the globe, bringing decades of experience
            and passion for teaching to your learning pods.
          </p>
        </motion.div>
      </section>

      <section className="faculty-section">
        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              className="faculty-card-3d"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                rotateY: 15,
              }}
            >
              <div className="faculty-avatar" style={{ background: faculty.gradient }}>
                <div className="avatar-icon">{faculty.icon}</div>
              </div>
              
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p className="faculty-subject">{faculty.subject}</p>
                
                <div className="faculty-details">
                  <div className="detail-item">
                    <span className="detail-icon">🎓</span>
                    <span>{faculty.education}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⭐</span>
                    <span>{faculty.experience} experience</span>
                  </div>
                </div>

                <div className="faculty-specialties">
                  <p className="specialties-label">Specialties:</p>
                  <div className="specialties-tags">
                    {faculty.specialties.map((spec, idx) => (
                      <span key={idx} className="specialty-tag">{spec}</span>
                    ))}
                  </div>
                </div>

                <div className="faculty-location">
                  <span className="location-icon">📍</span>
                  <span>{faculty.location}</span>
                </div>
                <div className="faculty-global">
                  <span className="global-icon">🌍</span>
                  <span>{faculty.global}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faculty-section">
        <motion.div
          className="highlights-card-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateY: 5 }}
        >
          <h2>Why Our Faculty Stands Out</h2>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Faculty;
