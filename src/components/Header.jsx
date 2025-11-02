import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="header-3d">
      <nav className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1, rotateY: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="logo-icon">🎓</span>
          <h1>The Global Classroom</h1>
        </motion.div>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <motion.span
                whileHover={{ y: -3, rotateX: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
      </nav>

      <motion.div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {isMenuOpen && (
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
