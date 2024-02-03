import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import photo from '../assets/yasmine.jpg';

export default function Infos() {
  return (
    <div>
        <img src={photo} className='mainimage img-fluid' alt="Yasmine Sassi" />            
        <h1 className='name'>Yasmine Sassi</h1>
        <h6 className='job'>Junior Front End Developer</h6>
        <p className='location'>Tunis, Tunisia</p>
        <a href="https://github.com/yasmine-sassi" className='git'><FontAwesomeIcon icon={faGithub} className='git-icon'/>yasmine-sassi<FontAwesomeIcon icon={faGithub} className='git-icon'/></a>
        <div className='contact'>
            <a href="mailto:yasmine.3.sassi@gmail.com">
                <button className='email btn btn-success' >
                <FontAwesomeIcon icon={faEnvelope} className='email'/>Email
                </button>
            </a>
            <button className='linkedin btn btn-success' onClick={()=>window.open("https://www.linkedin.com/in/yasmine-sassi-536138249/")}>
              <FontAwesomeIcon icon={faLinkedin} className='linkedin '/>Linkedin
            </button>
        </div>
    </div>
  );
}