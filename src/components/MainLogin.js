import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios'
import {getCookie, setCookie} from '../service/CookieService'
import {PageHeader, Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

class MainLogin extends Component {


    componentDidMount() {
        let login = getCookie('login');
        let token = getCookie('token');
        if(token === undefined || login === undefined) {
            return;
        }
        if (login.length > 0 && token.length > 0 ) {
            console.log('Авторизация кукисами:', login, token);
            this.props.funcUser(login, token);
        }
    }

    auth = () => {
        let params = new URLSearchParams();

        let loginNew = document.getElementById("login_id").value;
        let passwordNew = document.getElementById("password_id").value;

        params.append('login', loginNew);
        params.append('password', passwordNew);

        axios.post('http://localhost:8080/sign-in', params)
            .then( (response) => {
                console.log(response);
                setCookie('login', response.data.userLogin);
                setCookie('token', response.data.token);
                console.log('Авторизация через запрос к серверу:');
                this.props.funcUser(response.data.userLogin, response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    render() {
        return(
            <Grid>
                <Row>
                    <PageHeader>Авторизация</PageHeader>
                </Row>
                <Row>
                    <Col xsOffset={3} xs={6}>
                        <FormGroup>
                            <FormControl id="login_id" type="text" placeholder="Login"/>
                            <FormControl id="password_id" type="password" placeholder="Password"/>
                            <Button onClick={this.auth} bsStyle="primary" bsSize="large" block>Войти</Button>
                            <LinkContainer to="/sign-up">
                                <a>Нет аккаунта? Зарегистрируйтесь.</a>
                            </LinkContainer>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MainLogin;