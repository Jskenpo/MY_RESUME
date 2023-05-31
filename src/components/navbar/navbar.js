import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Heat from "../../imas/miami.png"


import "./navbar.scss";

function NavBarExample() {
    return (
        <div className="navbar">
            <Navbar id='navBarFijo' className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand id='Brand' as={Link} to="/" ><img id ='Brand_image' src={Heat}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar sticky="top" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/about">Conocimientos y proyectos</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contactame</Nav.Link>
                            <Nav.Link id='Nombre'> Jose Santisteban</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
}

export default NavBarExample;