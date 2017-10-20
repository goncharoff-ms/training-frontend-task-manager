import React, { Component } from 'react';
import {PageHeader, Grid, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'


class MainRegistration extends Component {


    render() {
        return(
            <Grid>
                <Row>
                    <PageHeader>Регистрация</PageHeader>
                    <Col xsOffset={3} xs={6}>
                        <FormGroup>
                            <FormControl type="text" placeholder="Логин"/>
                            <FormControl type="text" placeholder="Имя"/>
                            <FormControl type="text" placeholder="Фамилия"/>
                            <FormControl type="text" placeholder="Ваш e-mail"/>
                            <FormControl type="password" placeholder="Пароль"/>
                            <FormControl type="password" placeholder="Повторите пароль"/>
                            <Button bsStyle="primary" bsSize="large" block>Зарегистрироваться</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MainRegistration;