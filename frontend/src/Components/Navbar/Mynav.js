import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Mynav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar className='sticky-top' bg="dark" variant="dark" expand="lg">
      <Link to="/" className="navbar-brand ms-4">
        <FontAwesomeIcon icon={faAddressCard} /> Resume Creater
      </Link>
      <Navbar.Toggle
        className="ms-4 me-4"
        aria-controls="basic-navbar-nav"
        onClick={handleNavToggle}
      >
        {isNavExpanded ? (
          <FontAwesomeIcon icon={faTimes} className='mr-3' />
        ) : (
          <FontAwesomeIcon icon={faBars} className='mr-3' />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" in={isNavExpanded}>
        <Nav className="justify-content-end flex-grow-1 pe-3 ms-3">
          <Link to="/" className="nav-link text-light mx-3">Home</Link>
          <Link to="/templates" className="nav-link text-light mx-3">Templates</Link>
          <Link to="/contact" className="nav-link text-light mx-3">Contact</Link>
          <Link to="/about" className="nav-link text-light mx-3">About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Mynav;
