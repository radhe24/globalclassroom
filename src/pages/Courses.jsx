import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const professionalCourses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      instructor: 'Ms. Neha Agarwal',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      price: '₹15,000',
      description: 'Comprehensive digital marketing course covering SEO, SEM, social media marketing, content creation, and analytics. Learn to create effective marketing campaigns and measure ROI.',
      topics: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Google Analytics', 'Email Marketing', 'Marketing Automation'],
      icon: '📱',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      instructor: 'Mr. Rohan Gupta',
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      price: '₹25,000',
      description: 'Master data science fundamentals, machine learning algorithms, and business analytics. Work on real-world projects and build a portfolio that stands out.',
      topics: ['Python Programming', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Big Data Analytics', 'Model Deployment'],
      icon: '📈',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
    },
    {
      id: 3,
      title: 'Project Management Professional',
      instructor: 'Ms. Shruti Nair',
      duration: '10 weeks',
      level: 'All Levels',
      price: '₹18,000',
      description: 'Get certified in project management with PMP preparation. Learn Agile, Scrum, Lean methodologies, and lead projects successfully in any industry.',
      topics: ['PMP Certification Prep', 'Agile Methodologies', 'Scrum Framework', 'Risk Management', 'Stakeholder Management', 'Project Planning'],
      icon: '✅',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
    },
    {
      id: 4,
      title: 'Web Development Full Stack',
      instructor: 'Prof. Arjun Mehta',
      duration: '20 weeks',
      level: 'Beginner to Advanced',
      price: '₹30,000',
      description: 'Become a full-stack developer. Learn frontend (React, HTML, CSS) and backend (Node.js, databases) development. Build real-world applications and deploy them.',
      topics: ['HTML/CSS/JavaScript', 'React.js', 'Node.js', 'Databases', 'API Development', 'DevOps'],
      icon: '💻',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 5,
      title: 'Business Analytics & Excel',
      instructor: 'Prof. Vikram Singh',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      price: '₹12,000',
      description: 'Master Excel, data analysis, and business intelligence. Learn to make data-driven decisions and create powerful dashboards and reports.',
      topics: ['Advanced Excel', 'Data Analysis', 'Power BI', 'SQL Basics', 'Dashboard Creation', 'Business Intelligence'],
      icon: '📊',
      gradient: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
    },
    {
      id: 6,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Ms. Priya Menon',
      duration: '14 weeks',
      level: 'Beginner to Intermediate',
      price: '₹20,000',
      description: 'Learn user interface and user experience design. Master design tools, create wireframes, prototypes, and design user-friendly digital products.',
      topics: ['Design Principles', 'Figma/Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
    },
    {
      id: 7,
      title: 'Cloud Computing & AWS',
      instructor: 'Dr. Sneha Reddy',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹22,000',
      description: 'Master cloud computing fundamentals and AWS services. Learn to deploy applications on the cloud, manage infrastructure, and scale systems.',
      topics: ['AWS Fundamentals', 'EC2 & S3', 'Cloud Architecture', 'DevOps on Cloud', 'Serverless Computing', 'Containerization'],
      icon: '☁️',
      gradient: 'linear-gradient(135deg, #20bf6b 0%, #01a3a4 100%)',
    },
    {
      id: 8,
      title: 'Leadership & Management',
      instructor: 'Dr. Rajesh Kumar',
      duration: '10 weeks',
      level: 'All Levels',
      price: '₹16,000',
      description: 'Develop leadership skills, learn team management, and become an effective leader. Suitable for managers, team leads, and aspiring leaders.',
      topics: ['Leadership Styles', 'Team Management', 'Conflict Resolution', 'Strategic Thinking', 'Communication', 'Performance Management'],
      icon: '👔',
      gradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    },
  ];

  return (
    <div className="courses-page">
      <section className="courses-hero">
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
            Professional Development Courses
          </motion.h1>
          <p className="page-subtitle">
            Advance your career with industry-relevant courses designed by experts.
            Learn practical skills, earn certificates, and transform your professional journey.
          </p>
        </motion.div>
      </section>

      <section className="courses-section">
        <div className="courses-grid">
          {professionalCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="course-card-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -20,
                rotateY: 15,
              }}
            >
              <div className="course-header" style={{ background: course.gradient }}>
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <div className="course-price">{course.price}</div>
              </div>

              <div className="course-content">
                <div className="course-meta">
                  <span className="meta-item">
                    <span className="meta-icon">👨‍🏫</span>
                    {course.instructor}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    {course.duration}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">📊</span>
                    {course.level}
                  </span>
                </div>

                <p className="course-description">{course.description}</p>

                <div className="course-topics">
                  <h4>What You'll Learn:</h4>
                  <div className="topics-list">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="btn-3d btn-primary course-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  as={Link}
                  to="/pricing"
                  style={{ background: course.gradient }}
                >
                  Enroll Now →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="courses-cta">
        <motion.div
          className="cta-card-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to Transform Your Career?</h2>
          <p>
            Join thousands of professionals who have upskilled and advanced their careers
            through our comprehensive professional development courses.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="btn-3d btn-primary btn-large"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/pricing"
            >
              View Pricing Plans
            </motion.button>
            <motion.button
              className="btn-3d btn-secondary btn-large"
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
              as={Link}
              to="/faculty"
            >
              Meet Our Instructors
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;

