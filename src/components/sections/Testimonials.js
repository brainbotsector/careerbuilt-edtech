import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer at Google",
    company: "Google",
    content: "Beyond Career's mentorship program completely transformed my approach to job hunting. My mentor helped me refine my skills and gave me the confidence to ace my interviews. The personalized guidance was exactly what I needed to land my dream job.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "₹45L Package",
    location: "Bangalore, India"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Manager at Microsoft",
    company: "Microsoft",
    content: "The internship opportunities provided by Beyond Career were instrumental in building my resume. I got to work with two startups and a Fortune 500 company before graduation! The network and connections I built were invaluable.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "3 Internships",
    location: "Seattle, USA"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Data Scientist at Amazon",
    company: "Amazon",
    content: "As a first-generation college student, I had no idea how to navigate the corporate world. Beyond Career gave me the guidance and resources I needed to succeed. The mock interviews and resume reviews were game-changers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "₹38L Package",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Investment Banker at JP Morgan",
    company: "JP Morgan",
    content: "The career counseling sessions helped me identify my true passions and strengths. I switched from engineering to finance and couldn't be happier with my decision. The transition support was exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "Career Switch",
    location: "Mumbai, India"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Senior Developer at Tesla",
    company: "Tesla",
    content: "The technical interview preparation was outstanding. The mock coding sessions and system design discussions helped me crack interviews at top tech companies. I'm now working on cutting-edge automotive technology!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "₹55L Package",
    location: "California, USA"
  },
  {
    id: 6,
    name: "Shreya Reddy",
    role: "UX Designer at Adobe",
    company: "Adobe",
    content: "Beyond Career helped me build an impressive portfolio and connect with industry professionals. The design mentorship program was exactly what I needed to transition from a non-design background into UX.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    achievement: "Portfolio Boost",
    location: "Pune, India"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Responsive testimonials count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        overflow: 'hidden',
        padding: '60px 0'
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `,
        zIndex: 1
      }}>
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.6)' : 
                         i % 3 === 1 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(236, 72, 153, 0.6)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
                opacity: 0.3;
              }
              50% {
                transform: translateY(-20px) translateX(10px);
                opacity: 1;
              }
            }
          `}
        </style>
      </div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1rem',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            marginBottom: '1.5rem'
          }}>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
              ⭐ Success Stories
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            padding: '0 1rem'
          }}>
            Student{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Success Stories
            </span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: '1.5',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            Hear from students who've transformed their careers with our comprehensive guidance and mentorship programs.
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#fbbf24',
              textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'
            }}>100+</span>
            <span style={{
              display: 'block',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginTop: '0.25rem'
            }}>Success Stories</span>
          </div>

          <div style={{
            width: '1px',
            height: '2rem',
            background: 'rgba(255, 255, 255, 0.2)'
          }}></div>
          
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#fbbf24',
              textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'
            }}>98%</span>
            <span style={{
              display: 'block',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginTop: '0.25rem'
            }}>Satisfaction Rate</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 0.5rem'
        }}>
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: ['0', '-40px', '-60px'][visibleTestimonials === 1 ? 0 : visibleTestimonials === 2 ? 1 : 2],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              cursor: 'pointer',
              display: visibleTestimonials === 1 ? 'flex' : ['none', 'flex', 'flex'][visibleTestimonials === 1 ? 0 : visibleTestimonials === 2 ? 1 : 2],
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: ['0', '-40px', '-60px'][visibleTestimonials === 1 ? 0 : visibleTestimonials === 2 ? 1 : 2],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              cursor: 'pointer',
              display: visibleTestimonials === 1 ? 'flex' : ['none', 'flex', 'flex'][visibleTestimonials === 1 ? 0 : visibleTestimonials === 2 ? 1 : 2],
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${visibleTestimonials}, 1fr)`,
            gap: '1rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            {testimonials.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                  scrollSnapAlign: 'start',
                  minWidth: visibleTestimonials === 1 ? 'calc(100% - 2rem)' : 'auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '1.5rem',
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Achievement Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  padding: '0.375rem 0.75rem',
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  borderRadius: '16px',
                  fontSize: '0.6875rem',
                  fontWeight: '600',
                  color: '#000',
                  boxShadow: '0 2px 10px rgba(251, 191, 36, 0.3)'
                }}>
                  {testimonial.achievement}
                </div>

                {/* Content */}
                <div style={{ marginTop: '1.5rem' }}>
                  <p style={{
                    fontSize: '0.9375rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}>
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginBottom: '1rem'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < testimonial.rating ? "#fbbf24" : "rgba(255, 255, 255, 0.3)"}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Profile */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                    <div>
                      <h4 style={{
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '0.125rem'
                      }}>
                        {testimonial.name}
                      </h4>
                      <p style={{
                        fontSize: '0.8125rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '0.125rem'
                      }}>
                        {testimonial.role}
                      </p>
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}>
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: currentIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: currentIndex === index 
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '0 1rem'
        }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
            }}
          >
            <span>Start Your Success Story</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>
        {`
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

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (max-width: 1024px) {
            .hero-stats {
              gap: 1rem !important;
            }
            
            .stat-divider {
              display: none !important;
            }
          }

          @media (max-width: 768px) {
            .hero-content {
              padding: 0 1rem !important;
            }
            
            .hero-stats {
              flex-direction: column !important;
              gap: 1rem !important;
            }
          }

          @media (max-width: 640px) {
            #testimonials {
              padding: 40px 0;
              min-height: auto;
            }

            .testimonials-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }

            .testimonial-card {
              min-width: 100% !important;
              padding: 1.25rem !important;
            }

            .navigation-buttons {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;