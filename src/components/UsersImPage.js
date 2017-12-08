import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { withRouter } from 'react-router-dom'
import {
    PageHeader,
    Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, HelpBlock, ToggleButtonGroup, ToggleButton,
    ButtonToolbar
} from 'react-bootstrap'

import axios from 'axios';

export default class UsersImPage extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            user: this.props.user(),
            email : '',
            name : '',
            surname : '',
            aboutUser : ''
        };

    }

    componentDidMount() {

        let params = new URLSearchParams();

        console.log('this.state.user.userLogin',this.state.user.userLogin);
        console.log('this.state.user.tokenString', this.state.user.tokenString);

        let login = this.state.user.userLogin;
        let token = this.state.user.tokenString;

        params.append('userLogin', login);
        params.append('token', token);

        axios.get(`http://localhost:8080/users/${login}`, {
            params: params
        }).then((response) => {
            console.log(response.data);
            this.setState({
                email : response.data.email,
                name : response.data.name,
                surname : response.data.surname,
                aboutUser : response.data.aboutUser,
            });
        }).catch((error) => {
            console.log(error.response);
        });

    };


    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>Информация о вас</PageHeader>
                    <Col xsOffset={3} xs={6}>
                        <p>{this.state.user.login}</p>
                        <p>{this.state.name}</p>
                        <p>{this.state.surname}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.aboutUser}</p>

                    </Col>
               </Row>
            </Grid>
        );
    }


}