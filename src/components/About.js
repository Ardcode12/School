import React, { useEffect, useRef } from 'react';
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <FiAward />,
      title: 'Academic Excellence',
      description: 'Consistently ranked among the top schools with a curriculum designed for holistic development.'
    },
    {
      icon: <FiUsers />,
      title: 'Expert Faculty',
      description: 'Our 200+ dedicated educators bring passion and expertise to inspire every learner.'
    },
    {
      icon: <FiTarget />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities including smart classrooms, labs, and sports complexes.'
    },
    {
      icon: <FiHeart />,
      title: 'Student Wellbeing',
      description: 'Comprehensive support systems ensuring every student thrives academically and emotionally.'
    }
  ];

  return (
    <section className="about section-padding" id="about" ref={sectionRef}>
      <div className="about__container container">
        <div className="about__grid">
          <div className="about__content">
            <div className="section-header" style={{ textAlign: 'left' }}>
              <div className="section-badge">
                <FiAward />
                About Us
              </div>
              <h2 className="section-title">
                A Legacy of <span>Excellence</span>
                <br />Since 1998
              </h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Greenwood Academy has been at the forefront of educational innovation, 
                providing students with an environment that fosters curiosity, creativity, 
                and character. Our 25-acre campus is a testament to our commitment to 
                creating spaces where young minds flourish.
              </p>
            </div>

            <div className="about__values">
              {values.map((value, index) => (
                <div className="about__value" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="about__value-icon">
                    {value.icon}
                  </div>
                  <div className="about__value-content">
                    <h4 className="about__value-title">{value.title}</h4>
                    <p className="about__value-desc">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__image-stack">
              <div className="about__image-main">
                <img src="/library.png" alt="Greenwood Academy Library" className="about__image" />
              </div>
              <div className="about__accent-card">
                <div className="about__accent-number">25+</div>
                <div className="about__accent-text">
                  Acres of<br />Green Campus
                </div>
              </div>
              <div className="about__accent-card about__accent-card--2">
                <div className="about__accent-number">15K+</div>
                <div className="about__accent-text">
                  Proud<br />Alumni
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
