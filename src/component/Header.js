import React from 'react';
import {Navbar, NavDropdown, Nav, Button, Form, FormControl, Container, Row, Col, Breadcrumb} from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Navbar bg="dark" variant='dark'>
                <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#berita">Berita</Nav.Link>
                        <Nav.Link href="#livescores">Live Scores</Nav.Link>
                        <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#transferpemain">Transfer Pemain</Nav.Link>
                        <Nav.Link href="#tim">Tim</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
                            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header

