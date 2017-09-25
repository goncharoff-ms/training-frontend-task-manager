import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <a className="header__logo" href="">
                    Webapp
                </a>
                <nav className="header__menu">
                    <ul>
                        <li><a href="#">Заявки</a></li>
                        <li><a href="#">Мои данные</a></li>
                        <li><a href="#">Выход</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
