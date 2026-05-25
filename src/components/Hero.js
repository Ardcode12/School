import React from 'react';
import { FiArrowDown, FiPlay } from 'react-icons/fi';
import { GiBookshelf, GiMicroscope, GiRunningShoe } from 'react-icons/gi';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div className="hero__bg-image">
        <img src="/campus-hero.png" alt="Greenwood Academy Campus" />
      </div>

      {/* Dark Overlay */}
      <div className="hero__overlay"></div>

      {/* Animated Background Shapes */}
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      {/* Grain Overlay */}
      <div className="hero__grain"></div>
      
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Admissions Open 2025-26
          </div>
          
          <h1 className="hero__title">
            Where <span className="hero__title-highlight">Excellence</span> 
            <br />
            Meets <span className="hero__title-italic">Inspiration</span>
          </h1>
          
          <p className="hero__description">
            State-of-the-art facilities designed to nurture every student's potential.
            From advanced laboratories to sprawling sports fields, experience 
            education beyond the ordinary.
          </p>
          
          <div className="hero__actions">
            <a href="#facilities" className="hero__btn hero__btn--primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Facilities
              <FiArrowDown className="hero__btn-icon" />
            </a>
            <button className="hero__btn hero__btn--secondary">
              <span className="hero__btn-play">
                <FiPlay />
              </span>
              Watch Tour
            </button>
          </div>

          {/* Feature pills */}
          <div className="hero__features">
            <div className="hero__feature">
              <GiBookshelf className="hero__feature-icon" />
              <span>Digital Library</span>
            </div>
            <div className="hero__feature">
              <GiMicroscope className="hero__feature-icon" />
              <span>Smart Labs</span>
            </div>
            <div className="hero__feature">
              <GiRunningShoe className="hero__feature-icon" />
              <span>Sports Complex</span>
            </div>
          </div>
        </div>

        {/* Floating Stat Cards - positioned absolutely */}
        <div className="hero__float-card hero__float-card--1">
          <span className="hero__float-number">25+</span>
          <span className="hero__float-label">Years of Excellence</span>
        </div>
        <div className="hero__float-card hero__float-card--2">
          <span className="hero__float-number">98%</span>
          <span className="hero__float-label">Success Rate</span>
        </div>
        <div className="hero__float-card hero__float-card--3">
          <span className="hero__float-number">3500+</span>
          <span className="hero__float-label">Students</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" onClick={scrollToAbout}>
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
