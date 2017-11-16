import React, { Component } from 'react';
import axios from 'axios';
import {PageHeader,
    Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap'


function ValidationProp(message = '', validationState = 'warning') {
    this.message = message;
    this.validationState = validationState;
}


class MainRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorLogin : new ValidationProp(),
            errorPassword : new ValidationProp(),
            errorPasswordRepeat : new ValidationProp(),
            errorEmail : new ValidationProp(),
            errorPhone : new ValidationProp(),
            errorName : new ValidationProp(),
            errorSurname : new ValidationProp(),
            errorInviteToken : new ValidationProp(),
            errorAbout : new ValidationProp(),
        };

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

    handleChange = (e) => {
        if (document.getElementById("login_id").value.length < 6 ||
            document.getElementById("login_id").value === '') {
            this.setState({
                errorLogin : new ValidationProp('Логин не менее 6 символов', 'error')
            });
        } else {
            this.setState({
                errorLogin : new ValidationProp('', 'success')
            });
        }
    };


    render() {
        return(
            <Grid>
                <Row>
                    <PageHeader>Регистрация</PageHeader>
                    <Col xsOffset={3} xs={6}>
                        <form>
                            <FormGroup id="loginGroup" validationState={this.state.errorLogin.validationState} >
                                <FormControl id="login_id" onKeyPress={this.handleChange.bind(this)} type="text" placeholder="Логин" />
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorLogin.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="passwordGroup" validationState={null}>
                                <FormControl id="password_id" type="password" placeholder="Пароль"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorPassword.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="passwordRepeatGroup" validationState={null}>
                                <FormControl id="password_repeat_id" type="password" placeholder="Повторите пароль"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorPasswordRepeat.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="nameGroup" validationState={null}>
                                <FormControl id="name_id" type="text" placeholder="Имя"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorName.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="surnameGroup" validationState={null}>
                                <FormControl id="surname_id" type="text" placeholder="Фамилия"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorSurname.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="emailGroup" validationState={null}>
                                <FormControl id="email_id" type="email" placeholder="Ваш e-mail"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorSurname.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="inviteGroup" validationState={null}>
                                <FormControl id="invite_token_id" type="text" placeholder="Пригласительный код" />
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorInviteToken.message}</HelpBlock>
                            </FormGroup>

                            <FormGroup id="aboutGroup" validationState={null}>
                                <FormControl id="about_id" componentClass="textarea" placeholder="Обо мне"/>
                                <FormControl.Feedback />
                                <HelpBlock>{this.state.errorAbout.message}</HelpBlock>
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