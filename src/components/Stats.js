import React, { useEffect, useRef, useState } from 'react';
import { FiBookOpen, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import './Stats.css';

const statsData = [
  { icon: <FiBookOpen />, number: 25, suffix: '+', label: 'Years of Excellence', description: 'Shaping futures since 1998' },
  { icon: <FiUsers />, number: 3500, suffix: '+', label: 'Students Enrolled', description: 'Diverse & inclusive community' },
  { icon: <FiAward />, number: 150, suffix: '+', label: 'Awards Won', description: 'National & international honors' },
  { icon: <FiGlobe />, number: 98, suffix: '%', label: 'Placement Rate', description: 'Top universities worldwide' },
];

const CountUp = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__overlay"></div>
      <div className="stats__grain"></div>
      
      <div className="stats__container container">
        <div className="stats__header">
          <h2 className="stats__title">Our Impact in Numbers</h2>
          <p className="stats__subtitle">Two decades of transforming lives through education</p>
        </div>

        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <div 
              className={`stats__card ${isVisible ? 'stats__card--visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="stats__card-icon">{stat.icon}</div>
              <div className="stats__card-number">
                <CountUp target={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="stats__card-label">{stat.label}</div>
              <div className="stats__card-desc">{stat.description}</div>
              <div className="stats__card-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
