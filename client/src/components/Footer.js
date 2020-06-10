import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Footer = () => {
  return (
    <footer>
      <a href={'http://codewitch.dev'}
         target={'_blank'}
         rel={'noopener noreferrer'}>
        <img src={'./CodeWitchLogo.png'} alt="AudTheCodeWitch Logo" height='50px' />
      </a>
      <p>©2020 Audrea Cook</p>
      <ListGroup horizontal={"sm"}>
        <ListGroupItem action href='https://github.com/AudTheCodeWitch' target="_blank" rel={'noopener noreferrer'} >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </ListGroupItem>

        <ListGroupItem  action href='https://twitter.com/AudTheCodeWitch' target="_blank" rel={'noopener noreferrer'} >
          <FontAwesomeIcon icon={faTwitter} /> @audTheCodeWitch
        </ListGroupItem>

        <ListGroupItem action href='https://www.linkedin.com/in/audreacook/' target="_blank" rel={'noopener noreferrer'} >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </ListGroupItem>
      </ListGroup>

    </footer>
  );
};

export default Footer;
