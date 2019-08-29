import React, { Component } from 'react'
import { Container, Navbar, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to="/home">Trabalho prático AJS</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/sobre">Sobre</Link>
                                </Nav.Link>
                            </Nav>
                            <Form inline>
                                <Button variant="outline-success">
                                    <Link to="/addcontact">Adicionar Contato</Link>
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}