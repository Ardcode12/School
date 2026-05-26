import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { 
  FiMapPin, FiPhone, FiMail, FiClock,
  FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin 
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const facilities = [
    'Digital Library',
    'Science Labs',
    'Computer Labs',
    'Sports Complex',
    'Music Studio',
    'Art Studio',
  ];

  const socials = [
    { icon: <FiFacebook />, label: 'Facebook' },
    { icon: <FiTwitter />, label: 'Twitter' },
    { icon: <FiInstagram />, label: 'Instagram' },
    { icon: <FiYoutube />, label: 'YouTube' },
    { icon: <FiLinkedin />, label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <LuGraduationCap />
                </div>
                <div className="footer__logo-text">
                  <span className="footer__logo-name">Greenwood</span>
                  <span className="footer__logo-tagline">Academy</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                Nurturing excellence since 1998. Our world-class facilities 
                and dedicated faculty create an environment where every student 
                can discover their potential and thrive.
              </p>
              <div className="footer__socials">
                {socials.map((social, index) => (
                  <button 
                    className="footer__social-link" 
                    key={index}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities */}
            <div className="footer__col">
              <h4 className="footer__col-title">Our Facilities</h4>
              <ul className="footer__links">
                {facilities.map((facility, index) => (
                  <li key={index}>
                    <a href="#facilities" className="footer__link">{facility}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Get In Touch</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <FiMapPin className="footer__contact-icon" />
                  <span>123 Education Lane,<br />Green Valley, City - 560001</span>
                </div>
                <div className="footer__contact-item">
                  <FiPhone className="footer__contact-icon" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="footer__contact-item">
                  <FiMail className="footer__contact-icon" />
                  <span>info@greenwood.edu</span>
                </div>
                <div className="footer__contact-item">
                  <FiClock className="footer__contact-icon" />
                  <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Greenwood Academy. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <button className="footer__bottom-link">Privacy Policy</button>
              <button className="footer__bottom-link">Terms of Service</button>
              <button className="footer__bottom-link">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
