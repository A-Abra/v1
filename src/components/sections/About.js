import React, { useEffect, useRef } from 'react';

export const About = () => {

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'SQL'];
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('About section is intersecting');
          entry.target.classList.add('about-animation');
        } else {
          console.log('About section is not intersecting');
          //entry.target.classList.remove('about-animation');
        }
      });
    }, {
      threshold: 0.3, // Trigger when 30% of the about section is visible
    });

    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);
  

  return (
    <div ref={aboutRef} id='about' className='about'>
      <section>About</section>
      <div className='about-info'>
        <p>
          Welcome. My name is Anosh and I had an early interest in playing around
          with computers. My first ever language was Javascript, where I
          discovered the experience of coding and the endless possibilities
          it offered.
        </p><br />
        <p>
          Skip forward today, and now I'm on the brink of graduating in May 2024
          with a Bachelor's degree in Computer Science. This journey has
          strengthen the fundamentals of programming, algorithms, and software
          development methodologies, equipping me with the skills needed to
          tackle real-world challenges in the field.
        </p><br />
        <p>
          Here are some technologies I've been working with lately
        </p>
      </div>
      <ul className='skill-list'>
        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default About;