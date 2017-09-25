import React, { Component } from 'react';
import './MainLogin.css'

class MainLogin extends Component {


    render() {
        return(
            <div className="wrap">
                <main rel="main" className="content">
                    <header className="content__header">
                        <h2>
                            Авторизация
                        </h2>
                    </header>
                    <div className="content__applications">
                        <input className="main-login__input" name="login" type="text" placeholder="Login"/>
                        <br/>
                        <input className="main-login__input" name="password" type="password" placeholder="Password"/>
                        <br/>
                        <button className="custom-btn">войти</button>
                    </div>
                </main>
            </div>

        );
    }
}

export default MainLogin;