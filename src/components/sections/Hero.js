import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video for smooth experience
    const video = document.createElement("video");
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        {/* Animated gradient overlay */}
        {/* <div className="hero-gradient-overlay"></div> */}

        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
            opacity: 1,
          }}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        {/* Floating particles animation */}
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="hero-content">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.2,
          }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="badge-text">🎓 From IIT Alumni</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Empowering Your{' '} */}
            <span className="hero-title-gradient">
              Your Launchpad to Career Success
            </span>

            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            The revolutionary platform connecting ambitious students with
            industry leaders.
            <strong>
              {/* {" "} */}
              We're not just building careers—we're building the future.
            </strong>
          </motion.p>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Students Guided</span>
            </div>

            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="#services" className="cta-primary">
              <span>Explore Services</span>
              <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="#contact" className="cta-secondary">
              <span>Start Your Journey</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>

      <div className="hero-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
    </section>
  );
};

export default Hero;
