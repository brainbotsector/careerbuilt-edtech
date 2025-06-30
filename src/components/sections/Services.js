import React, { useState, useEffect } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "🎯",
      title: "Career Guidance",
      description: "Personalized career counseling to help you identify your strengths and choose the right career path with industry insights.",
      features: [
        "AI-powered career aptitude tests",
        "Real-time industry trend analysis", 
        "Personalized pathway planning",
        "Skills gap assessment"
      ],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      stats: "500+ Guided"
    },
    {
      icon: "💼",
      title: "Internship Opportunities",
      description: "Access exclusive internship opportunities with top companies across various industries with guaranteed placement support.",
      features: [
        "Curated premium internship listings",
        "Complete application support",
        "Mock interview preparation",
        "Salary negotiation guidance"
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      stats: "200+ Placements"
    },
    {
      icon: "👨‍🏫",
      title: "Mentorship Programs",
      description: "One-on-one mentorship from industry professionals and alumni who've successfully navigated their career paths.",
      features: [
        "Industry-specific expert mentors",
        "Weekly one-on-one sessions",
        "Career roadmap development",
        "Professional network access"
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      stats: "50+ Mentors"
    },
    {
      icon: "🌐",
      title: "Community Engagement",
      description: "Join a vibrant community of ambitious students and professionals for networking, growth, and collaborative learning.",
      features: [
        "Exclusive networking events",
        "Industry-focused workshops",
        "Peer-to-peer learning groups",
        "Alumni connection platform"
      ],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      stats: "1000+ Members"
    }
  ];

  return (
    <>
      <style jsx>{`
        .services-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          overflow: hidden;
        }

        .services-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .services-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(139, 92, 246, 0.05) 25%,
            rgba(236, 72, 153, 0.05) 50%,
            rgba(34, 197, 94, 0.05) 75%,
            rgba(249, 115, 22, 0.05) 100%
          );
          animation: gradient-shift 8s ease-in-out infinite;
        }

        {/* @keyframes gradient-shift {
          0%, 100% {
            background: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.05) 0%,
              rgba(139, 92, 246, 0.05) 25%,
              rgba(236, 72, 153, 0.05) 50%,
              rgba(34, 197, 94, 0.05) 75%,
              rgba(249, 115, 22, 0.05) 100%
            );
          }
          50% {
            background: linear-gradient(
              225deg,
              rgba(249, 115, 22, 0.05) 0%,
              rgba(34, 197, 94, 0.05) 25%,
              rgba(236, 72, 153, 0.05) 50%,
              rgba(139, 92, 246, 0.05) 75%,
              rgba(59, 130, 246, 0.05) 100%
            );
          }
        } */}

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          filter: blur(1px);
          animation: float-shape 12s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          left: 15%;
          animation-delay: -4s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 25%;
          animation-delay: -8s;
        }

        @keyframes float-shape {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg);
            opacity: 0.6;
          }
          66% {
            transform: translateY(20px) translateX(-15px) rotate(240deg);
            opacity: 0.4;
          }
        }

        .services-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #ffffff;
          animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out;
        }

        .services-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out 0.2s both;
        }

        .services-title-gradient {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-text 3s ease-in-out infinite;
        }

        @keyframes gradient-text {
          0%, 100% {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #22c55e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          50% {
            background: linear-gradient(135deg, #22c55e, #ec4899, #8b5cf6, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        .services-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto 3rem;
          animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out 0.4s both;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out calc(0.6s + var(--delay)) both;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
          text-align: center;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-align: center;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .service-feature {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }

        .feature-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          flex-shrink: 0;
          box-shadow: 0 2px 4px rgba(34, 197, 94, 0.3);
        }

        .service-stats {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stats-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fbbf24;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
        }

        .cta-section {
          text-align: center;
          margin-top: 4rem;
          animation: ${isVisible ? 'fadeInUp' : 'none'} 0.8s ease-out 1s both;
        }

        .cta-text {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .cta-secondary:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding: 4rem 1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>

      <section id="services" className="services-section">
        {/* Background Elements */}
        <div className="services-background">
          <div className="services-gradient-overlay"></div>
          <div className="floating-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>

        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <div className="services-badge">
              ⚡ Comprehensive Career Solutions
            </div>
            
            <h2 className="services-title">
              Our <span className="services-title-gradient">Premium Services</span>
            </h2>
            
            <p className="services-subtitle">
              Comprehensive services designed to accelerate your career journey with cutting-edge tools, 
              expert mentorship, and exclusive opportunities tailored for ambitious students.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ '--delay': `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="service-feature">
                      <div className="feature-check">
                        <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-stats">
                  <span className="stats-number">{service.stats}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <p className="cta-text">
              Ready to transform your career journey with our premium services?
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">
                <span>Get Started Today</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#about" className="cta-secondary">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;