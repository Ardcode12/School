import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { GiBookshelf } from 'react-icons/gi';
import './Facilities.css';

const facilitiesData = [
  {
    title: 'Digital Library',
    image: '/library.png',
    description: 'A 10,000+ collection of books, e-resources, and digital archives. Our library features quiet study zones, reading lounges, and an AI-powered recommendation system.',
    features: ['10,000+ Books', 'E-Library Access', 'Reading Lounges'],
    color: '#8B5E3C'
  },
  {
    title: 'Science Laboratories',
    image: '/science-lab.png',
    description: 'Fully equipped Physics, Chemistry, and Biology labs with modern instruments, safety systems, and dedicated research corners for advanced experiments.',
    features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab'],
    color: '#6B4226'
  },
  {
    title: 'Computer Labs',
    image: '/computer-lab.png',
    description: 'High-performance computing labs with 200+ systems, high-speed internet, 3D printers, and robotics stations for coding, AI, and tech exploration.',
    features: ['200+ Systems', 'Robotics Station', '3D Printing'],
    color: '#A0714F'
  },
  {
    title: 'Sports Complex',
    image: '/sports-field.png',
    description: 'An expansive sports facility with cricket grounds, football fields, basketball courts, swimming pool, and an indoor badminton arena.',
    features: ['Swimming Pool', 'Cricket Ground', 'Indoor Courts'],
    color: '#C9A04E'
  },
  {
    title: 'Music & Dance Studio',
    image: '/music-room.png',
    description: 'Acoustically treated music rooms with instruments for classical, western, and contemporary music. Spacious dance floors with mirrors and sound systems.',
    features: ['Recording Studio', 'Dance Floor', 'Instruments'],
    color: '#D2A679'
  },
  {
    title: 'Art & Design Studio',
    image: '/art-studio.png',
    description: 'Creative spaces equipped with professional-grade art supplies, pottery wheels, and digital design workstations for budding artists and designers.',
    features: ['Art Supplies', 'Pottery Studio', 'Digital Design'],
    color: '#8B5E3C'
  },
  {
    title: 'Athletics Track',
    image: '/sports-field.png',
    description: 'A 400-meter synthetic athletic track with long jump pits, shot put areas, and a fully equipped gymnasium for fitness and competitive sports training.',
    features: ['400m Track', 'Gymnasium', 'Training Zone'],
    color: '#6B4226'
  },
  {
    title: 'Innovation Hub',
    image: '/computer-lab.png',
    description: 'A dedicated makerspace for STEM projects, featuring robotics kits, IoT devices, and tools for prototyping and building real-world solutions.',
    features: ['Makerspace', 'IoT Lab', 'Prototyping'],
    color: '#A0714F'
  }
];

const Facilities = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.facility-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="facilities section-padding" id="facilities" ref={sectionRef}>
      <div className="facilities__bg-accent facilities__bg-accent--1"></div>
      <div className="facilities__bg-accent facilities__bg-accent--2"></div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GiBookshelf />
            Our Facilities
          </div>
          <h2 className="section-title">
            World-Class <span>Infrastructure</span>
            <br />For Future Leaders
          </h2>
          <p className="section-subtitle">
            Every corner of our campus is designed to inspire learning, creativity, 
            and holistic growth. Explore our state-of-the-art facilities.
          </p>
        </div>

        <div className="facilities__grid">
          {facilitiesData.map((facility, index) => (
            <div 
              className={`facility-card ${visibleCards.has(String(index)) ? 'facility-card--visible' : ''}`}
              key={index}
              data-index={index}
              style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            >
              {/* Card Image */}
              <div className="facility-card__image">
                <img src={facility.image} alt={facility.title} />
              </div>

              <div className="facility-card__body">
                <div className="facility-card__header">
                  <h3 className="facility-card__title">{facility.title}</h3>
                  <div className="facility-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <p className="facility-card__desc">{facility.description}</p>

                <div className="facility-card__features">
                  {facility.features.map((feature, fIndex) => (
                    <span className="facility-card__feature" key={fIndex}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="facility-card__footer">
                  <span className="facility-card__link">
                    Learn More <FiArrowRight />
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="facility-card__glow" style={{ background: facility.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
