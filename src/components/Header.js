import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

const Hearder = () => {
    return (
        <header>
            <Navbar bg="dark" variant={"dark"} expand={"lg"} collapseOnSelect>
                <Container>
                    <Navbar.Brand href={"/"}>
                        Dong UK Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                       <Nav.Link href={"/cart"}>
                           <i className={'fas fa-shopping-cart'} /> Cart
                       </Nav.Link>
                        <Nav.Link href={"/login"}>
                            <i className={'fas fa-user'} /> Login
                        </Nav.Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
};

export default Hearder;
