import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Connecting learners from India to the world, breaking geographical barriers through innovative online education.',
    },
    {
      icon: '👥',
      title: 'Personalized Learning',
      description: 'Small learning pods ensure every student receives individual attention and tailored support.',
    },
    {
      icon: '❤️',
      title: 'Passion-Driven',
      description: 'We believe education should be engaging, inspiring, and accessible to everyone, everywhere.',
    },
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology and teaching methods to create the future of education.',
    },
  ];

  const stats = [
    { label: 'Students Enrolled', value: '5,000+', icon: '👥' },
    { label: 'Expert Faculty', value: '50+', icon: '👨‍🏫' },
    { label: 'Countries', value: '25+', icon: '🌍' },
    { label: 'Learning Pods', value: '600+', icon: '💡' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
            About The Global Classroom
          </motion.h1>
          <motion.p
            className="page-subtitle"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Transforming education through personalized, small-group learning pods.
            Bridging India to the world, one student at a time.
          </motion.p>
        </motion.div>
      </section>

      <section className="about-section">
        <motion.div
          className="mission-card-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateY: 5, rotateX: 5 }}
        >
          <h2>Our Mission</h2>
          <p>
            The Global Classroom was born from a simple yet powerful idea: education should know no boundaries.
            We combine the rich educational heritage of India with global best practices to create a learning
            experience that is both deeply personalized and universally accessible.
          </p>
          <p>
            Our innovative small-group learning pod model ensures that every student receives the attention they
            deserve, while our expert faculty from around the world brings diverse perspectives and cutting-edge
            knowledge to each session.
          </p>
        </motion.div>
      </section>

      <section className="about-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotateY: 15 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card-3d"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <motion.div
          className="context-card-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotateY: 5 }}
        >
          <div className="context-badges">
            <motion.span
              className="badge-3d"
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              🇮🇳 Proudly Indian, Globally Connected
            </motion.span>
            <motion.span
              className="badge-3d"
              whileHover={{ scale: 1.1, rotateY: -10 }}
            >
              🌍 Serving 25+ Countries
            </motion.span>
            <motion.span
              className="badge-3d"
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              ⭐ Excellence in Education
            </motion.span>
          </div>
          <p>
            Rooted in the rich educational traditions of India, we celebrate diversity, inclusivity,
            and the power of knowledge to transform lives. Our platform connects learners across
            continents, creating a truly global community of curious minds.
          </p>
        </motion.div>
      </section>

      <section className="about-section credits-section">
        <motion.div
          className="credits-card-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
        >
          <h2>Created With Passion</h2>
          <div className="credits-divider"></div>
          <motion.p
            className="credits-text"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(255, 215, 0, 0.5)',
                '0 0 20px rgba(255, 215, 0, 0.8)',
                '0 0 10px rgba(255, 215, 0, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Created by <strong>Sonali Sharma</strong> and <strong>Sannath Koushik</strong>
          </motion.p>
          <p className="credits-description">
            Bringing together creativity, technology, and a vision for accessible global education.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
