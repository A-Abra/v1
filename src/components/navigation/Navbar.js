import React, { useState } from 'react';
import "./Navbar.css";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from './../images/g20.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const sideBarClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='logo-container'>
            <img className='nav-logo' src={logo} alt="AA" />
          </div>
          {/* <p exact='true' to="/" className="nav-logo">
            AA
          </p> */}

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#about" activeclassname='active' className='nav-links' style={{ color: 'white' }} onClick={sideBarClick}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href="#works" activeclassname='active' className='nav-links' style={{ color: 'white' }} onClick={sideBarClick}>
                Works
              </a>
            </li>
            <li className='nav-item'>
              <a href="#education" activeclassname='active' className='nav-links' style={{ color: 'white' }} onClick={sideBarClick}>
                Education
              </a>
            </li>
            <li className='nav-item'>
              <a href="#contact" activeclassname='active' className='nav-links' style={{ color: 'white' }} onClick={sideBarClick}>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a class="nav-links" href="https://drive.google.com/file/d/1uJjdfE5-F4AndktdBHkMzIn_EOkEnd9D/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={sideBarClick}>
            {click ? (
              <span className="icon">
                <IoClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <IoMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;