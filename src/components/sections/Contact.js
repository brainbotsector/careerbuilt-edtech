import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaUser,
  FaEnvelopeOpen,
  FaCommentDots
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Office',
      content: 'Indian Institute of Technology, Kharagpur, West Bengal',
      color: 'text-blue-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 91233 34456',
      color: 'text-green-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contact@beyondcareer',
      color: 'text-purple-500'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      color: 'text-orange-500'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', color: 'hover:bg-blue-600', name: 'LinkedIn' },
    { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500', name: 'Twitter' },
    { icon: FaInstagram, href: '#', color: 'hover:bg-pink-500', name: 'Instagram' },
    { icon: FaFacebook, href: '#', color: 'hover:bg-blue-700', name: 'Facebook' },
    { icon: FaYoutube, href: '#', color: 'hover:bg-red-600', name: 'YouTube' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-gradient-overlay"></div>
        <div className="contact-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`contact-particle contact-particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="contact-decorations">
          <div className="contact-decoration contact-decoration-1"></div>
          <div className="contact-decoration contact-decoration-2"></div>
          <div className="contact-decoration contact-decoration-3"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="contact-content"
        >
          <motion.div variants={itemVariants} className="contact-header">
            <div className="contact-badge">
              <span className="contact-badge-text">💬 Let's Connect</span>
            </div>
            <h2 className="contact-title">
              Get In <span className="contact-title-gradient">Touch</span>
            </h2>
            <p className="contact-subtitle">
              We are here to help you with your career journey, feel free to reach out!
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info-section">
              <div className="contact-info-header">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-description">
                  Get in touch with us 
                </p>
              </div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`contact-info-icon ${info.color}`}>
                      <info.icon />
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-content-title">{info.title}</h4>
                      <p className="contact-info-content-text">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="contact-social-section">
                <h4 className="contact-social-title">Follow Us</h4>
                <div className="contact-social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`contact-social-link ${social.color}`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      aria-label={social.name}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-section">
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h3 className="contact-form-title">Send Us a Message</h3>
                  <p className="contact-form-description">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {submitStatus && (
                  <motion.div
                    className={`contact-status ${submitStatus.success ? 'contact-status-success' : 'contact-status-error'}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="contact-status-icon">
                      {submitStatus.success ? <FaCheckCircle /> : <FaExclamationTriangle />}
                    </div>
                    <p className="contact-status-text">{submitStatus.message}</p>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">
                      <FaUser className="contact-form-label-icon" />
                      Full Name *
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="contact-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      <FaEnvelopeOpen className="contact-form-label-icon" />
                      Email Address *
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="contact-input"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="phone" className="contact-form-label">
                      <FaPhone className="contact-form-label-icon" />
                      Phone Number
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="contact-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="message" className="contact-form-label">
                      <FaCommentDots className="contact-form-label-icon" />
                      Message *
                    </label>
                    <div className={`contact-input-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="contact-input contact-textarea"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-btn"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="contact-submit-content">
                      {isSubmitting ? (
                        <>
                          <div className="contact-spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="contact-submit-icon" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .contact-grid {
            flex-direction: column;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 20px 0;
          }
          
          .container {
            padding: 0 15px;
            width: 100%;
            max-width: 100%;
          }

          .contact-content {
            width: 100%;
            padding: 0 5px;
          }

          .contact-info-section,
          .contact-form-section {
            width: 100% !important;
            max-width: 100%;
            padding: 15px;
            box-sizing: border-box;
          }

          .contact-info-item,
          .contact-form-container {
            width: 100%;
            max-width: 100%;
          }

          .contact-input,
          .contact-textarea {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .contact-social-grid {
            flex-wrap: wrap;
            justify-content: center;
          }

          .contact-submit-btn {
            width: 100%;
          }
        }

        /* 320px specific fixes */
        @media (max-width: 320px) {
          /* Fix container widths */
          .contact-info-section,
          .contact-form-section {
            width: 100% !important;
            max-width: 100vw;
            padding: 12px;
            margin: 0;
            box-sizing: border-box;
          }

          /* Fix form elements */
          .contact-input-wrapper {
            width: 100%;
            max-width: 100%;
          }

          .contact-input, 
          .contact-textarea {
            width: 100%;
            max-width: calc(100% - 24px); /* Account for padding */
            padding: 8px 12px;
            font-size: 14px;
          }

          /* Fix contact info cards */
          .contact-info-item {
            flex-direction: column;
            padding: 10px;
          }

          .contact-info-icon {
            margin-right: 0;
            margin-bottom: 8px;
          }

          /* Adjust text sizes */
          .contact-title {
            font-size: 1.4rem;
            line-height: 1.2;
            padding: 0 5px;
          }

          .contact-subtitle {
            font-size: 0.85rem;
            padding: 0 8px;
          }

          .contact-info-content-title {
            font-size: 0.85rem;
          }

          .contact-info-content-text {
            font-size: 0.8rem;
          }

          /* Fix social icons */
          .contact-social-grid {
            gap: 8px;
          }

          .contact-social-link {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          /* Fix submit button */
          .contact-submit-btn {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;