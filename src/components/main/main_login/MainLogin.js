import React, { Component } from 'react';
import axios from 'axios'
import {PageHeader, Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'
import Store from './../../../Store'

class MainLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login : 'max1Gonch',
            password : '123123'
        };
    }

    auth = () => {
        axios.post('http://localhost:8080/sign-in',  {
                login : 'max1Gonch',
                password : '123123'
        }).then(function (resp) {
            console.log(resp);
        }).catch(function (e) {
            console.log(e);
        })
    }


    render() {
        return(
            <Grid>
                <Row>
                    <PageHeader>Авторизация</PageHeader>
                </Row>
                <Row>
                    <Col xsOffset={3} xs={6}>
                        <FormGroup>
                            <FormControl type="text" placeholder="Login"/>
                            <FormControl type="password" placeholder="Password"/>
                            <Button onClick={this.auth} bsStyle="primary" bsSize="large" block>Войти</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MainLogin;