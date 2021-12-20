import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand = 'lg' >
        <Container>
        <Navbar.Brand href="#home">Online Competition</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
                <NavDropdown title="Username" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Actions</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavbarComponent
