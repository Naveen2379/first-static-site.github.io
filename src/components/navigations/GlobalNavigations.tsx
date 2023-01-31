import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';

const GlobalNavigations = () => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/** make it responsive */}
            <img
              alt="moksha"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Moksha Conglomerate
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}


export default GlobalNavigations;