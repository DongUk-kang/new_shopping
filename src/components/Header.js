import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../actions/UserActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state ) => state.userLogin )
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }



    return (
        <header>
            <Navbar bg="dark" variant={"dark"} expand={"lg"} collapseOnSelect>
                <Container>
                    <Navbar.Brand href={"/"}>
                        Dong UK Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                        <Nav className={'ml-auto'}>
                            <LinkContainer to={"/cart"}>
                                <Nav.Link>
                                    <i className={'fas fa-shopping-cart'} /> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo
                                ? (
                                    <NavDropdown
                                        id={"username"}
                                        title={userInfo.name}
                                    >
                                        <LinkContainer to={"/profile"}>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>

                                    </NavDropdown>
                                )
                                : (
                                    <LinkContainer to={"/login"}>
                                        <Nav.Link>
                                            <i className={'fas fa-user'} /> Login
                                        </Nav.Link>
                                    </LinkContainer>
                                )
                            }
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown id={'adminmenu'} title={'Admin'}>
                                    <LinkContainer to={"/admin/userlist"}>
                                        <NavDropdown.Item>
                                            Users
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={"/admin/productslist"}>
                                        <NavDropdown.Item>
                                            Products
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={"/admin/orderlist"}>
                                        <NavDropdown.Item>
                                            Orders
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
