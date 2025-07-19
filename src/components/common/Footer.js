// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       {/* CSS Styles */}
//       <style jsx global>{`
//         .footer {
//           background: linear-gradient(135deg, #0f172a, #1e293b);
//           color: white;
//           padding: 4rem 0 2rem;
//         }
        
//         .footer-container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 2rem;
//         }
        
//         .footer-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 3rem;
//           margin-bottom: 3rem;
//         }
        
//         .footer-logo {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//           background: linear-gradient(90deg, #3b82f6, #8b5cf6);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           display: inline-block;
//         }
        
//         .footer-logo span {
//           color: #f59e0b;
//         }
        
//         .footer-about {
//           color: #94a3b8;
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }
        
//         .social-links {
//           display: flex;
//           gap: 1rem;
//         }
        
//         .social-link {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
        
//         .social-link:hover {
//           background: #3b82f6;
//           transform: translateY(-3px);
//         }
        
//         .footer-heading {
//           font-size: 1.25rem;
//           font-weight: 600;
//           margin-bottom: 1.5rem;
//           color: white;
//           position: relative;
//           padding-bottom: 0.5rem;
//         }
        
//         .footer-heading::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 40px;
//           height: 2px;
//           background: #3b82f6;
//         }
        
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }
        
//         .footer-link {
//           color: #94a3b8;
//           transition: all 0.3s ease;
//         }
        
//         .footer-link:hover {
//           color: #3b82f6;
//           transform: translateX(5px);
//         }
        
//         .contact-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 1rem;
//           margin-bottom: 1rem;
//           color: #94a3b8;
//         }
        
//         .contact-icon {
//           color: #3b82f6;
//           margin-top: 0.25rem;
//         }
        
//         .footer-bottom {
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           padding-top: 2rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1.5rem;
//         }
        
//         .copyright {
//           color: #64748b;
//           text-align: center;
//         }
        
//         .footer-links-bottom {
//           display: flex;
//           gap: 1.5rem;
//         }
        
//         .footer-link-bottom {
//           color: #64748b;
//           transition: all 0.3s ease;
//         }
        
//         .footer-link-bottom:hover {
//           color: #3b82f6;
//         }
        
//         .back-to-top {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #3b82f6, #8b5cf6);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
//         }
        
//         .back-to-top:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
//         }
        
//         @media (min-width: 768px) {
//           .footer-bottom {
//             flex-direction: row;
//             justify-content: space-between;
//           }
//         }
//       `}</style>

//       {/* Footer JSX */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">
//             <div>
//               <div className="footer-logo">Beyond<span>Career</span></div>
//               <p className="footer-about">
//                 Beyond Career is dedicated to empowering students with the skills, guidance, and opportunities they need to excel in their careers.
//               </p>
//               <div className="social-links">
//                 <a href="#" className="social-link" aria-label="LinkedIn">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link" aria-label="Twitter">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link" aria-label="Instagram">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                   </svg>
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="footer-heading">Quick Links</h3>
//               <div className="footer-links">
//                 <a href="#home" className="footer-link">Home</a>
//                 <a href="#about" className="footer-link">About</a>
//                 <a href="#services" className="footer-link">Services</a>
//                 <a href="#testimonials" className="footer-link">Success Stories</a>
//                 <a href="#contact" className="footer-link">Contact</a>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="footer-heading">Services</h3>
//               <div className="footer-links">
//                 <a href="#" className="footer-link">Career Guidance</a>
//                 <a href="#" className="footer-link">Internship Programs</a>
//                 <a href="#" className="footer-link">Mentorship</a>
//                 <a href="#" className="footer-link">Workshops</a>
//                 <a href="#" className="footer-link">Community</a>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="footer-heading">Contact Us</h3>
//               <div className="footer-links">
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                       <polyline points="22,6 12,13 2,6"></polyline>
//                     </svg>
//                   </div>
//                   <span>contact@beyondcareer</span>
//                 </div>
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                     </svg>
//                   </div>
//                   <span>+91 91233 34456</span>
//                 </div>
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                       <circle cx="12" cy="10" r="3"></circle>
//                     </svg>
//                   </div>
//                   <span>Indian Institute of Technology, Kharagpur, West Bengal</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="footer-bottom">
//             <p className="copyright">
//               &copy; {new Date().getFullYear()} Beyond Career. All rights reserved.
//             </p>
//             <div className="footer-links-bottom">
//               <a href="#" className="footer-link-bottom">Privacy Policy</a>
//               <a href="#" className="footer-link-bottom">Terms of Service</a>
//               <a href="#" className="footer-link-bottom">Cookies</a>
//             </div>
//             <div className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M18 15l-6-6-6 6"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx global>{`
        .footer {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          padding: 6rem 0 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/images/footer-pattern.svg') center/cover no-repeat;
          opacity: 0.05;
          pointer-events: none;
        }
        
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .footer-logo {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          letter-spacing: -0.5px;
        }
        
        .footer-logo span {
          color: #f59e0b;
        }
        
        .footer-about {
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-link:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-3px) scale(1.05);
          border-color: rgba(59, 130, 246, 0.4);
        }
        
        .footer-heading {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.75rem;
          color: white;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-link {
          color: #94a3b8;
          transition: all 0.3s ease;
          font-size: 1.05rem;
          display: inline-block;
          width: fit-content;
        }
        
        .footer-link:hover {
          color: #3b82f6;
          transform: translateX(5px);
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .contact-icon {
          color: #3b82f6;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .copyright {
          color: #64748b;
          text-align: center;
          font-size: 0.95rem;
        }
        
        .footer-links-bottom {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer-link-bottom {
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        
        .footer-link-bottom:hover {
          color: #3b82f6;
        }
        
        .back-to-top {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
          border: none;
        }
        
        .back-to-top:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .newsletter {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 1.5rem;
        }
        
        .newsletter-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }
        
        .newsletter-input {
          display: flex;
          gap: 0.5rem;
        }
        
        .newsletter-input input {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(15, 23, 42, 0.7);
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        .newsletter-input input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        .newsletter-input button {
          padding: 0 1.25rem;
          border-radius: 8px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .newsletter-input button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .footer-grid {
            grid-template-columns: 1.5fr repeat(3, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .footer {
            padding: 4rem 0 2rem;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <motion.div 
                className="footer-logo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Career<span>Built</span>
              </motion.div>
              
              <motion.p 
                className="footer-about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bridging the gap between academia and industry with startup-style career acceleration programs. 
                We transform students into industry-ready professionals through hands-on learning and direct 
                corporate connections.
              </motion.p>
              
              <motion.div 
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </motion.div>
              
              {/* <motion.div 
                className="newsletter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="newsletter-title">Join our student community</div>
                <div className="newsletter-input">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Join</button>
                </div>
              </motion.div> */}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="footer-heading">Quick Links</h3>
              <div className="footer-links">
                <Link href="#home" className="footer-link">Home</Link>
                <Link href="#about" className="footer-link">Our Mission</Link>
                <Link href="#programs" className="footer-link">Programs</Link>
                <Link href="#success-stories" className="footer-link">Success Stories</Link>
                <Link href="#partners" className="footer-link">Industry Partners</Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="footer-heading">Programs</h3>
              <div className="footer-links">
                <Link href="#" className="footer-link">Career Launchpad</Link>
                <Link href="#" className="footer-link">Industry Connect</Link>
                <Link href="#" className="footer-link">Skill Accelerator</Link>
                <Link href="#" className="footer-link">College Bridge</Link>
                <Link href="#" className="footer-link">Startup Incubator</Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="footer-heading">Contact Us</h3>
              <div className="footer-links">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span>hello@careerbuilt.io</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+91 12345 67890</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>123 Career Lane, Suite 456, Tech City, TC 45 </span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="copyright">
              &copy; {new Date().getFullYear()} CareerBuilt. Empowering students to bridge the education-career gap.
            </p>
            <div className="footer-links-bottom">
              <Link href="#" className="footer-link-bottom">Privacy Policy</Link>
              <Link href="#" className="footer-link-bottom">Terms of Service</Link>
              <Link href="#" className="footer-link-bottom">Cookie Policy</Link>
              <Link href="#" className="footer-link-bottom">Careers</Link>
            </div>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;