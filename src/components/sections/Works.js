import React, { useEffect, useRef } from 'react';
import { IoEyeSharp, IoLibrarySharp } from "react-icons/io5";

export const Works = () => {
  const worksRef = useRef(null);

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
      threshold: 0.2,
    });

    observer.observe(worksRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={worksRef} id='works' className='works'>
      <section>Works</section>
      <div className='project-info'>
        <p>
          Here are the previous works I have done:
        </p><br />
        <div className="project-header">
          <a className='project-icons' href="https://njcts-njcc-dt2.pegacloud.net/prweb/PRServletPublicAuth/app/capstone-translation-service/tZu9sgxwjr34J3noXRAlyg*/!STANDARD?AppName=CTS&NoticeID=NJCRT1234567890" target="_blank" rel="noopener noreferrer">
            <IoEyeSharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <p className='project-name' style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', marginTop: '4px' }}>
            Court Notice Translation app (Prototype Link)
          </p>
        </div><br />
        <p className='project-description'>
          The Court Notice Translation app is a web application designed to simplify
          the process of translating court notices into multiple languages. Users can
          scan a QR code printed on the notice, redirecting them to an external website
          where they can select their preferred language for translation. The app aims to
          improve accessibility to legal information for individuals who may not be proficient
          in the original language of the notice.
        </p><br />
        <div className="project-header">
          <a className='project-icons' href="https://cadabra-to-do.vercel.app/" target="_blank" rel="noopener noreferrer">
            <IoEyeSharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <a className='project-icons' href="https://github.com/A-Abra/Cadabra-ToDo" target="_blank" rel="noopener noreferrer">
            <IoLibrarySharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <p className='project-name' style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', marginTop: '4px' }}>
            Notion Clone with AI Assistant
          </p>
        </div><br />
        <p className='project-description'>
          The Notion Clone Todo List, known as Cadabra ToDo (a play on my name ABRA), is a
          productivity app designed to help users manage tasks efficiently. It features an
          AI assistant for generating suggestions when users struggle to articulate
          thoughts and integrates <a href="https://openai.com/research/dall-e"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none' }}>DALL-E </a>
          images to be generated relevant to each note.
        </p><br />
        <div className="project-header">
          <a className='project-icons' href="https://github.com/CS388GroupProject/GroupProject" target="_blank" rel="noopener noreferrer">
            <IoLibrarySharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <p className='project-name' style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', marginTop: '4px' }}>
            Tripless
          </p>
        </div><br />
        <p className='project-description'>
          A travel planning app that simplifies the process of organizing excursions. Through curated packages,
          users can coordinate flight bookings, access event details, and secure hotel accommodations with provided
          details of each.
        </p><br />
        <div className="project-header">
          <a className='project-icons' href="https://github.com/A-Abra/Flixster2" target="_blank" rel="noopener noreferrer">
            <IoLibrarySharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <p className='project-name' style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', marginTop: '4px' }}>
            Flixster
          </p>
        </div><br />
        <p className='project-description'>
          Flixster is a movie rating app that utilizes <a href="https://developer.themoviedb.org/docs/getting-started"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none' }}>the Movie Database </a> to fetch ratings and showcase top-rated
          titles, providing users with a convenient platform to explore, discover, and evaluate films.
        </p><br />
        <div className="project-header">
          <a className='project-icons' href="https://github.com/A-Abra/v1" target="_blank" rel="noopener noreferrer">
            <IoLibrarySharp style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          </a>
          <p className='project-name' style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', marginTop: '4px' }}>
            Personal Portfolio
          </p>
        </div><br />
        <p className='project-description'>
          This portfolio you see as of now showcasing who I am.
        </p><br />
      </div>
    </div>
  );
};

export default Works;