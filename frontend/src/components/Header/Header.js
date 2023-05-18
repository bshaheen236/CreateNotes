import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <Navbar bg="primary" expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        CreateNotes App
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='m-auto'>
                        <Form inline>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >
                            <Link to="/mynotes" style={{ textDecoration: 'none' }}>
                                My Notes
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Shaheen" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
