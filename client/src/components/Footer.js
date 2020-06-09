import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    < footer className='container-fluid' >
      <img src='./CodeWitchLogo.png' alt="AudTheCodeWitch Logo" height='50px' />
      <ListGroup horizontal>
        <ListGroup.Item><FontAwesomeIcon icon={faGithub} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faTwitter} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faLinkedin} /></ListGroup.Item>
        <ListGroup.Item>CodeWitch.dev</ListGroup.Item>
      </ListGroup>
    < /footer>
)
  ;
};

export default Footer;
