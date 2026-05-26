import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container container">
        <a href="#home" className="navbar__logo" onClick={(e) => scrollToSection(e, '#home')}>
          <div className="navbar__logo-icon">
            <LuGraduationCap />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Greenwood</span>
            <span className="navbar__logo-tagline">Academy</span>
          </div>
        </a>

        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="navbar__link"
              onClick={(e) => scrollToSection(e, link.href)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="navbar__cta-btn" onClick={(e) => scrollToSection(e, '#contact')}>
            Enroll Now
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          id="navbar-toggle"
        >
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
