import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './CTA.css';

const CTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta section-padding" id="contact" ref={sectionRef}>
      <div className="container">
        <div className={`cta__card ${isVisible ? 'cta__card--visible' : ''}`}>
          {/* Background Effects */}
          <div className="cta__bg-pattern"></div>
          <div className="cta__bg-glow cta__bg-glow--1"></div>
          <div className="cta__bg-glow cta__bg-glow--2"></div>

          <div className="cta__content">
            <div className="cta__text">
              <div className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Admissions Open
              </div>
              <h2 className="cta__title">
                Begin Your Child's 
                <br />
                <span>Journey of Excellence</span>
              </h2>
              <p className="cta__desc">
                Schedule a campus tour and experience our world-class facilities 
                firsthand. Limited seats available for the 2025-26 academic year.
              </p>
              <div className="cta__actions">
                <a href="#contact" className="cta__btn cta__btn--primary">
                  Schedule a Tour
                  <FiArrowRight />
                </a>
                <a href="#contact" className="cta__btn cta__btn--secondary">
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="cta__info">
              <div className="cta__info-card">
                <div className="cta__info-icon"><FiPhone /></div>
                <div>
                  <div className="cta__info-label">Call Us</div>
                  <div className="cta__info-value">+91 98765 43210</div>
                </div>
              </div>
              <div className="cta__info-card">
                <div className="cta__info-icon"><FiMail /></div>
                <div>
                  <div className="cta__info-label">Email</div>
                  <div className="cta__info-value">admissions@greenwood.edu</div>
                </div>
              </div>
              <div className="cta__info-card">
                <div className="cta__info-icon"><FiMapPin /></div>
                <div>
                  <div className="cta__info-label">Visit Us</div>
                  <div className="cta__info-value">123 Education Lane, City</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
