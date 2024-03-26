import React, { useEffect, useRef } from 'react';
import { IoLogoGithub, IoLogoLinkedin, } from "react-icons/io5";

export const Contact = () => {
  const contactRef = useRef(null);

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

    observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contactRef} id='contact' className='contact'>
      <section className='contact-heading'>Contact</section>
      <div className='contact-info'>
        <form>
          <p>I'm open to connecting with new opportunities. Feel free to reach out if you have any inquiries or simply wish to say hello.
            I'll make every effort to respond promptly. </p>
          <a href="mailto:philabra1395@gmail.com"
            target="_blank"
            rel="noreferrer">Reach Out</a>
        </form>
      </div>
      <div className='social'>
        <a className='social-icons' href="https://github.com/A-Abra" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub />
        </a>
        <a className='social-icons' href="https://www.linkedin.com/in/anoshpabraham/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
      </div>
      <h5 className='copyright'>© 2024 Anosh Abraham. All rights reserved.</h5>
    </div>
  );
};

export default Contact;
