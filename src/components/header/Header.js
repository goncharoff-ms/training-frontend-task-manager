import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class Header extends React.Component {

    render() {
        if (this.props.login) {
            return(
                <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Application manager</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/applications">
                            <NavItem eventKey={1}>Заявки</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/new/application">
                            <NavItem eventKey={2}>Создать заявку</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Ваш профиль" id="basic-nav-dropdown">
                            <LinkContainer to="/users/im">
                                <NavItem eventKey={3.2}>Ваши данные</NavItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <LinkContainer to="/logout">
                                <NavItem eventKey={3.3}>Выйти</NavItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
        } else {
            return(
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Application manager</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/sign-in">
                                <NavItem eventKey={1}>Войти</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/sign-up">
                                <NavItem eventKey={2}>Регистрация</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }
}



export default Header;



