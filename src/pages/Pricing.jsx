import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);

  const pricingPlans = [
    {
      name: 'Early Learners',
      price: '500',
      period: 'month',
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
      features: [
        'Interactive play-based learning',
        'Small groups of 5-6 students',
        '3 sessions per week',
        'Progress tracking',
        'Parent dashboard',
        'Certified early childhood educators',
      ],
      popular: false,
    },
    {
      name: 'K-12 Foundation',
      price: '1,500',
      period: 'month',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      features: [
        'Comprehensive curriculum coverage',
        'Pod size: 6-8 students',
        '4 sessions per week',
        'Homework support',
        'Regular assessments',
        'Expert subject teachers',
        'Flexible timing options',
      ],
      popular: true,
    },
    {
      name: 'Higher Education',
      price: '3,000',
      period: 'month',
      gradient: 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)',
      features: [
        'University-level courses',
        'Pod size: 5-7 students',
        '5 sessions per week',
        'Project-based learning',
        'Career guidance',
        'Industry expert faculty',
        'Certificate programs',
        '24/7 resource access',
      ],
      popular: false,
    },
    {
      name: 'Professional Development',
      price: '2,500',
      period: 'month',
      gradient: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)',
      features: [
        'Skill-based courses',
        'Pod size: 6-8 professionals',
        'Evening/weekend sessions',
        'Networking opportunities',
        'Industry case studies',
        'Certification upon completion',
        'Resume building support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
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
            Flexible Pricing for Every Learner
          </motion.h1>
          <p className="page-subtitle">
            Affordable, transparent pricing designed for Indian families and global learners.
            Join a pod today and start your journey!
          </p>
        </motion.div>
      </section>

      <section className="pricing-section">
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card-3d ${plan.popular ? 'popular' : ''}`}
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
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}
              
              <div className="pricing-header" style={{ background: plan.gradient }}>
                <h3>{plan.name}</h3>
                <div className="price-tag">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                className="btn-3d btn-primary pricing-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                style={{ background: plan.gradient }}
              >
                🚀 Join This Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <motion.div
          className="offers-card-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateY: 5 }}
        >
          <div className="offers-icon">🎁</div>
          <h2>Special Offers</h2>
          <div className="offers-list">
            <div className="offer-item">
              <span className="offer-icon">🎉</span>
              <div>
                <strong>Early Bird Discount:</strong> Get 20% off on your first 3 months!
              </div>
            </div>
            <div className="offer-item">
              <span className="offer-icon">👨‍👩‍👧‍👦</span>
              <div>
                <strong>Family Plan:</strong> Enroll 2+ siblings and save 15% on each enrollment
              </div>
            </div>
            <div className="offer-item">
              <span className="offer-icon">🌍</span>
              <div>
                <strong>Referral Bonus:</strong> Refer a friend and both get ₹500 credit!
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pricing-cta">
        <motion.button
          className="btn-3d btn-secondary btn-large"
          whileHover={{ scale: 1.1, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
          as={Link}
          to="/"
        >
          👥 View Learning Pods →
        </motion.button>
      </section>

      {showModal && (
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
            <h2>Join a Learning Pod</h2>
            <p>
              Thank you for your interest! Our team will contact you within 24 hours to help you
              join a learning pod that matches your needs.
            </p>
            <div className="modal-process">
              <h4>What happens next?</h4>
              <ul>
                <li>✓ We'll assess your learning goals and preferences</li>
                <li>✓ Match you with an appropriate learning pod</li>
                <li>✓ Schedule your first session</li>
                <li>✓ Provide access to all learning resources</li>
              </ul>
            </div>
            <motion.button
              className="btn-3d btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(false)}
            >
              Got it!
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
