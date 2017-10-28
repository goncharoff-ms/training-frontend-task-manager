import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class Header extends React.Component {

    render() {
        if (this.props.loggin) {
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
                        <NavItem eventKey={1}><Link to="/applications">Заявки</Link></NavItem>
                        <NavDropdown eventKey={2} title="Ваш профиль" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.2}><Link to="/users/im">Ваши данные</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}><Link to="/logout">Выйти</Link></MenuItem>
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
                            <NavItem eventKey={1}><Link to="/sign-in">Войти</Link></NavItem>
                            <NavItem eventKey={2}><Link to="/sign-up">Регистрация</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }
}



export default Header;



