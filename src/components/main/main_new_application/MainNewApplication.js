import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { withRouter } from 'react-router-dom'
import {PageHeader,
    Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap'

import axios from 'axios';

class MainNewApplication extends Component {

    constructor(prop) {
       super(prop);

       this.state = {
           user : this.props.user()
       };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {

        let params = new URLSearchParams();

        const login = this.state.user.userLogin;
        const token = this.state.user.tokenString;

         params.append('userLogin', login);
         params.append('token', token);
         params.append('name', this.name.value);
         params.append('order', this.order.value);
         params.append('info', this.info.value);
         params.append('date', this.date.value);


        axios.post('http://localhost:8080/new/application', params)
         .then((response) => {
             const history = createHistory();
             history.goBack();
         })
         .catch( (error) => {
            console.log(error);
         });


        event.preventDefault();
    };


    render() {
        return(
        <Grid>
            <Row>
                <PageHeader>Создание новой заявки</PageHeader>
                <Col xsOffset={3} xs={6}>
                    <form>
                        <FormGroup>
                            <ControlLabel>Имя заявки</ControlLabel>
                            <FormControl inputRef={(input) => { this.name = input; }} type="text" placeholder="..." />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Выберите приоритет заявки</ControlLabel>
                            <FormControl inputRef={(input) => { this.order = input; }} componentClass="select" placeholder="select">
                                <option>НИЗКИЙ</option>
                                <option>СРЕДНИЙ</option>
                                <option>ВЫСОКИЙ</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Описание заявки</ControlLabel>
                            <FormControl inputRef={(input) => { this.info = input; }} id="taskInfo_id" placeholder="..." />
                        </FormGroup>


                        <FormGroup>
                            <ControlLabel>Дата и время окончания действия заявки:</ControlLabel>
                            <FormControl inputRef={(input) => { this.date = input; }} type="datetime-local"/>
                        </FormGroup>

                        <FormGroup>
                                <Button block onClick={this.handleSubmit}  bsStyle="primary" bsSize="large">
                                    Создать заявку
                                </Button>
                        </FormGroup>
                    </form>
                </Col>
            </Row>
        </Grid>
        );
    }
}

export default MainNewApplication;