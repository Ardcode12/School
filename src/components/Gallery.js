import React, { useEffect, useRef, useState } from 'react';
import { FiMaximize2 } from 'react-icons/fi';
import './Gallery.css';

const galleryItems = [
  { 
    image: '/library.png',
    title: 'Central Library',
    category: 'Library',
    size: 'large'
  },
  { 
    image: '/science-lab.png',
    title: 'Chemistry Lab',
    category: 'Laboratory',
    size: 'small'
  },
  { 
    image: '/sports-field.png',
    title: 'Sports Complex',
    category: 'Sports',
    size: 'small'
  },
  { 
    image: '/music-room.png',
    title: 'Music Room',
    category: 'Arts',
    size: 'medium'
  },
  { 
    image: '/computer-lab.png',
    title: 'Computer Lab',
    category: 'Technology',
    size: 'medium'
  },
  { 
    image: '/art-studio.png',
    title: 'Art Studio',
    category: 'Arts',
    size: 'large'
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery section-padding" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiMaximize2 />
            Campus Gallery
          </div>
          <h2 className="section-title">
            A Glimpse Into Our <span>Campus</span>
          </h2>
          <p className="section-subtitle">
            Explore the spaces where students learn, play, create, and grow every day.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div 
              className={`gallery__item gallery__item--${item.size} ${isVisible ? 'gallery__item--visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="gallery__item-bg">
                <img src={item.image} alt={item.title} className="gallery__item-img" />
              </div>
              <div className="gallery__item-overlay">
                <span className="gallery__item-category">{item.category}</span>
                <h3 className="gallery__item-title">{item.title}</h3>
                <div className="gallery__item-expand">
                  <FiMaximize2 />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
