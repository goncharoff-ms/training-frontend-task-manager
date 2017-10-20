import React, { Component } from 'react';
import {PageHeader, Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

class MainLogin extends Component {

    constructor(props) {
        super(props);


        this.state = {
            login : '',
            password : ''
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
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
                            <FormControl type="text" placeholder="Login"/>
                            <FormControl type="password" placeholder="Password"/>
                            <Button bsStyle="primary" bsSize="large" block>Войти</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MainLogin;