import React, { Component } from 'react';
import axios from 'axios';
import {PageHeader,
    Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap'





class MainRegistration extends Component {

    constructor(props) {
        super(props);
    };

    registration = () => {
        let params = new URLSearchParams();
        let login = document.getElementById("login_id").value;
        let password = document.getElementById("password_id").value;
        let name = document.getElementById("name_id").value;
        let surname = document.getElementById("surname_id").value;
        let passwordRepeat = document.getElementById("password_repeat_id").value;
        let email = document.getElementById("email_id").value;
        let about = document.getElementById("about_id").value;
        let inviteToken = document.getElementById("invite_token_id").value;

        params.append('login', login);
        params.append('password', password);
        params.append('name', name);
        params.append('surname', surname);
        params.append('email', email);
        params.append('about', about);
        params.append('token_invite', inviteToken);

        axios.post('http://localhost:8080/sign-up', params)
            .then((response) => {
                console.log(response);
                this.props.funcUser(response.data.userLogin, response.data.token);
            })
            .catch( (error) => {
                console.log(error);
            });
    };
    


    render() {
        return(
            <Grid>
                <Row>
                    <PageHeader>Регистрация</PageHeader>
                    <Col xsOffset={3} xs={6}>
                        <form>
                            <FormGroup id="loginGroup">
                                <FormControl id="login_id" type="text" placeholder="Логин" />
                            </FormGroup>

                            <FormGroup id="passwordGroup">
                                <FormControl id="password_id" type="password" placeholder="Пароль"/>
                            </FormGroup>

                            <FormGroup id="passwordRepeatGroup" >
                                <FormControl id="password_repeat_id" type="password" placeholder="Повторите пароль"/>
                            </FormGroup>

                            <FormGroup id="nameGroup" >
                                <FormControl id="name_id" type="text" placeholder="Имя"/>
                            </FormGroup>

                            <FormGroup id="surnameGroup" >
                                <FormControl id="surname_id" type="text" placeholder="Фамилия"/>
                            </FormGroup>

                            <FormGroup id="emailGroup" >
                                <FormControl id="email_id" type="email" placeholder="Ваш e-mail"/>
                            </FormGroup>

                            <FormGroup id="inviteGroup" >
                                <FormControl id="invite_token_id" type="text" placeholder="Пригласительный код" />
                            </FormGroup>

                            <FormGroup id="aboutGroup" >
                                <FormControl id="about_id" componentClass="textarea" placeholder="Обо мне"/>
                            </FormGroup>

                            <Button onClick={this.registration}
                                    bsStyle="primary"
                                    bsSize="large" block>Зарегистрироваться</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MainRegistration;