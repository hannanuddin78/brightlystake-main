import React from 'react';
import Bootstrap from 'bootstrap';
import Logo from '../../../../assets/images/logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#home"> <img src={Logo} alt="Logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto md">
                        <NavLink to="/moonbeam" className='nav-link'>MOONBEAM</NavLink>
                        <NavLink to="/" exact className='nav-link'>DELEGATORS</NavLink>
                        <NavLink to="/stakwithus" exact className='nav-link'>STAKE WITH US</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;