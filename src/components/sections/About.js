import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLightbulb, FaUsers, FaHandshake, FaGraduationCap, FaRocket, FaHeart, FaChevronRight, FaPlay } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Our Mission",
      description: "To bridge the gap between academic learning and professional success by providing personalized career guidance.",
      color: "from-blue-500 to-purple-600",
      details: "We believe every student deserves access to world-class career guidance that transforms potential into achievement."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Our Vision",
      description: "A world where every student has access to the resources and mentorship needed to build a fulfilling career.",
      color: "from-purple-500 to-pink-600",
      details: "Creating a global ecosystem where talent meets opportunity, and dreams become reality."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Our Approach",
      description: "Combining industry expertise with academic excellence to create tailored career development plans.",
      color: "from-pink-500 to-orange-600",
      details: "Data-driven insights meet human connection to deliver personalized growth strategies."
    }
  ];

  const values = [
    { icon: <FaGraduationCap />, title: "Excellence"},
    { icon: <FaRocket />, title: "Innovation"},
    { icon: <FaHeart />, title: "Empathy" }
  ];

  const stats = [
    { number: "100", label: "Students Helped", prefix: "+" },
    { number: "10", label: "Employees", prefix: "+" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="about-gradient-overlay"></div>
        <div className="about-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`about-particle about-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="about-header" variants={itemVariants}>
            <div className="about-badge">
              <span className="about-badge-text">✨ Our Story</span>
            </div>
            <h2 className="about-title">
              About <span className="about-title-gradient">Career Built</span>
            </h2>

          </motion.div>

          {/* Founding Story Section */}
          <motion.div className="founding-story" variants={itemVariants}>
            <div className="story-content">
              <div className="story-text">
                <h3 className="story-title">Founded at IIT</h3>
                <p className="story-description">
                  Career Built was founded by a group of passionate IIT alumni who recognized the gap between academic learning and real-world career success. 
                  CareerBuilt is a modern edtech platform designed to bridge the gap between college education and real-world careers. Built as a simulated startup project, it reflects how students can be empowered through expert mentorship, practical guidance, and industry-aligned resources.
                </p>
                
                {/* Interactive Stats */}
                <div className="story-stats">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="story-stat"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="story-stat-number">{stat.prefix}{stat.number}</span>
                      <span className="story-stat-label">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="story-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More About Our Journey</span>
                  <FaChevronRight className="story-cta-icon" />
                </motion.button>
              </div>

              <div className="story-visual">
                <div className="story-image-container">
                  <div className="story-image-overlay">
                    <motion.button
                      className="story-play-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    >
                      <FaPlay />
                    </motion.button>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="IIT Kharagpur campus and students collaborating" 
                    width={500}
                    height={300}
                    className="story-image"
                  />
                  <div className="story-image-glow"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission, Vision, Approach Cards */}
          <motion.div className="mission-vision-section" variants={itemVariants}>
            <div className="mission-vision-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`mission-card ${activeCard === index ? 'active' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mission-card-background">
                    <div className={`mission-card-gradient bg-gradient-to-br ${feature.color}`}></div>
                  </div>
                  
                  <div className="mission-card-content">
                    <div className="mission-card-icon">
                      {feature.icon}
                    </div>
                    <h3 className="mission-card-title">{feature.title}</h3>
                    <p className="mission-card-description">{feature.description}</p>
                    <div className="mission-card-details">
                      <p>{feature.details}</p>
                    </div>
                  </div>

                  <div className="mission-card-hover-effect"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div className="values-section" variants={itemVariants}>
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
