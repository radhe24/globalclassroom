import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' },
  ];

  return (
    <footer className="footer-3d">
      <div className="footer-container">
        <div className="footer-section">
          <motion.div
            className="footer-logo"
            whileHover={{ rotateY: 15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="footer-icon">🎓</span>
            <h3>The Global Classroom</h3>
            <p>Your future, online. Your future, global.</p>
          </motion.div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="footer-info">
            <p>📍 India • Global Reach</p>
            <p>🌍 Serving 25+ Countries</p>
            <p>📧 contact@globalclassroom.edu</p>
          </div>
        </div>
      </div>

      <div className="footer-credits">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <p>
            Created by <strong>Sonali Sharma</strong> and <strong>Sannath Koushik</strong>
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} The Global Classroom. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
