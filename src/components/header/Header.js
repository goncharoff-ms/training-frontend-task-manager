import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


class Header extends React.Component {

    constructor(props) {
        super();

        this.state = {
            logg : props.loggin,
        }
    }


    render() {
        if (this.state.logg) {
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
                        <NavDropdown eventKey={3} title="Ваш профиль" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><Link to="/users/im">Ваши данные</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}><Link to="/logout">Выйти</Link></MenuItem>
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
                            <NavItem eventKey={1}><Link to="/sign-up">Регистрация</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }
}



export default Header;



