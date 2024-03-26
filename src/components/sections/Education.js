import React, { useEffect, useRef } from 'react';
import uniImage from './../images/university.png';

export const Education = () => {
  const eduRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('About section is intersecting');
          entry.target.classList.add('works-animation');
        } else {
          // console.log('About section is not intersecting');
          //entry.target.classList.remove('about-animation');
        }
      });
    }, {
      threshold: 0.4,
    });

    observer.observe(eduRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={eduRef} id='education' className='education'>
      <section>Education</section>
      <div className='education-info'>
        <div className='education-text'>
          <h1 className='degree'>
            Bachelor of Computer Science
          </h1><br />
          <h2 className='uni-name'>
            New Jersey Institute of Technology, Newark, NJ
          </h2><br />
          <h2 className='graduation-date'>
            Expected graduation in 2024
          </h2><br />
          <h2 className='gpa-section'>
            GPA <span className='gpa-score'>3.47</span>
          </h2><br />
          <p className='courses-taken'>
            <span className='course-heading'>Courses undertaken:</span> Advanced Data Structures and Algorithms,
            Object-Oriented Programming, Guided Design in Software Engineering, Computer Networks, Programming Language Concepts,
            Android Development, Operating Systems, Advanced Database Systems and Design.
          </p><br />
        </div>
        <div className='uni-image-container'>
          <img className='uni-image' src={uniImage} alt="NJIT Logo" />
        </div>
      </div>
    </div>
  );
};

export default Education;
