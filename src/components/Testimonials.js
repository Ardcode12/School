import React, { useEffect, useRef, useState } from 'react';
import { FiMessageSquare, FiStar } from 'react-icons/fi';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 8 Student',
    text: 'The facilities at Greenwood Academy are exceptional. My daughter loves the science labs and has developed a genuine passion for research. The campus is safe, modern, and truly inspiring.',
    rating: 5,
    initials: 'PS'
  },
  {
    name: 'Rajesh Mehta',
    role: 'Alumni, Batch of 2020',
    text: 'The computer labs and innovation hub prepared me well for my career in technology. The hands-on experience I gained here gave me an edge at university. Forever grateful!',
    rating: 5,
    initials: 'RM'
  },
  {
    name: 'Aisha Khan',
    role: 'Parent of Grade 5 Student',
    text: 'What sets Greenwood apart is how they balance academics with sports and arts. The swimming pool, music studio, and art rooms are world-class. My son is thriving here.',
    rating: 5,
    initials: 'AK'
  },
  {
    name: 'Dr. Venkat Rao',
    role: 'Education Consultant',
    text: 'Having visited hundreds of schools, I can confidently say Greenwood\'s infrastructure is among the best in the region. Their commitment to modern education is truly commendable.',
    rating: 5,
    initials: 'VR'
  },
  {
    name: 'Sneha Patel',
    role: 'Alumni, Batch of 2018',
    text: 'The sports complex and athletics track shaped my athletic career. I represented the state in track and field, and it all started at Greenwood\'s amazing facilities.',
    rating: 5,
    initials: 'SP'
  },
  {
    name: 'Michael D\'souza',
    role: 'Parent of Grade 11 Student',
    text: 'The digital library and smart classrooms have transformed how my children learn. The school continuously invests in upgrading their facilities. Outstanding!',
    rating: 5,
    initials: 'MD'
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

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
    <section className="testimonials section-padding" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiMessageSquare />
            Testimonials
          </div>
          <h2 className="section-title">
            What Our <span>Community</span> Says
          </h2>
          <p className="section-subtitle">
            Hear from parents, alumni, and education experts about their experience 
            with our facilities and academic programs.
          </p>
        </div>

        <div className="testimonials__scroll-wrapper" ref={scrollRef}>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div
                className={`testimonial-card ${isVisible ? 'testimonial-card--visible' : ''}`}
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-card__stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="testimonial-card__star" />
                  ))}
                </div>

                <p className="testimonial-card__text">"{testimonial.text}"</p>

                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{testimonial.name}</div>
                    <div className="testimonial-card__role">{testimonial.role}</div>
                  </div>
                </div>

                <div className="testimonial-card__quote">"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
