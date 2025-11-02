import { motion } from 'framer-motion';
import './Faculty.css';

const Faculty = () => {
  const facultyByPathway = {
    'Early Learners': [
      {
        name: 'Ms. Radha Iyer',
        subject: 'Early Childhood Education',
        experience: '12+ years',
        education: 'M.Ed. from Delhi University',
        specialties: ['Play-Based Learning', 'Child Development', 'Storytelling'],
        icon: '👶',
        gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
        location: 'Mumbai, India',
        global: 'Certified Montessori educator',
      },
      {
        name: 'Mrs. Kavita Desai',
        subject: 'Preschool Education',
        experience: '15+ years',
        education: 'B.Ed. Early Childhood, Mumbai University',
        specialties: ['Creative Arts', 'Language Development', 'Social Skills'],
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        location: 'Pune, India',
        global: 'Multilingual teaching expert',
      },
      {
        name: 'Ms. Priya Menon',
        subject: 'Early Learning Specialist',
        experience: '10+ years',
        education: 'M.A. Child Psychology, Bangalore University',
        specialties: ['Cognitive Development', 'Motor Skills', 'Early Math'],
        icon: '🧩',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        location: 'Bangalore, India',
        global: 'Published researcher in child development',
      },
    ],
    'K-12': [
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
    ],
    'Higher Education': [
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
        name: 'Dr. Rajesh Kumar',
        subject: 'History & Social Studies',
        experience: '20+ years',
        education: 'Ph.D. from JNU, Delhi',
        specialties: ['World History', 'Indian History', 'Political Science'],
        icon: '📚',
        gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
        location: 'Kolkata, India',
        global: 'UNESCO consultant',
      },
    ],
    'Professional Development': [
      {
        name: 'Ms. Neha Agarwal',
        subject: 'Digital Marketing',
        experience: '10+ years',
        education: 'MBA Marketing, IIM Bangalore',
        specialties: ['SEO', 'Social Media Marketing', 'Content Strategy'],
        icon: '📱',
        gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
        location: 'Bangalore, India',
        global: 'Worked with Fortune 500 companies',
      },
      {
        name: 'Mr. Rohan Gupta',
        subject: 'Data Science & Analytics',
        experience: '8+ years',
        education: 'M.S. Data Science, Carnegie Mellon',
        specialties: ['Python', 'Machine Learning', 'Business Analytics'],
        icon: '📈',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        location: 'Gurgaon, India',
        global: 'Led analytics at top tech firms',
      },
      {
        name: 'Ms. Shruti Nair',
        subject: 'Project Management',
        experience: '12+ years',
        education: 'PMP Certified, IIM Ahmedabad',
        specialties: ['Agile', 'Scrum', 'Lean Management'],
        icon: '✅',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        location: 'Mumbai, India',
        global: 'Certified PMP, PMI member',
      },
    ],
  };

  const pathwayColors = {
    'Early Learners': 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
    'K-12': 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
    'Higher Education': 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
    'Professional Development': 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
  };

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
            World-class educators organized by learning pathway, bringing decades of experience
            and passion for teaching to your learning pods.
          </p>
        </motion.div>
      </section>

      {Object.entries(facultyByPathway).map(([pathway, facultyMembers], pathwayIndex) => (
        <section key={pathway} className="faculty-section">
          <motion.h2
            className="pathway-section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: pathwayColors[pathway],
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {pathway} Faculty
          </motion.h2>
          
          <div className="faculty-grid">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                className="faculty-card-3d"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (pathwayIndex * 0.2) + (index * 0.1) }}
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
      ))}

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
