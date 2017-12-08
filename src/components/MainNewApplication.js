import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import {
    PageHeader,
    Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, ToggleButtonGroup, ToggleButton,
    ButtonToolbar
} from 'react-bootstrap'

import axios from 'axios';

class MainNewApplication extends Component {

    constructor(prop) {
       super(prop);

       this.state = {
           user : this.props.user(),
           listRole : []
       };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeListRole = (e) => {
        this.setState({
            listRole  : e
        });
    };


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
         params.append('userRoles', this.state.listRole);


        axios.post('http://localhost:8080/new/application', params)
         .then((response) => {
             const history = createHistory();
             history.goBack();
         })
         .catch( (error) => {
            console.log(error.response);
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
                            <ControlLabel>Нужные подписи </ControlLabel>
                            <ButtonToolbar>
                                <ToggleButtonGroup onChange={this.changeListRole.bind(this)} type="checkbox" justified>
                                    <ToggleButton value={1}>Секретарь</ToggleButton>
                                    <ToggleButton value={2}>Бухгалтер</ToggleButton>
                                    <ToggleButton value={3}>Менеджер закупок</ToggleButton>
                                    <ToggleButton value={4}>Аналитик</ToggleButton>
                                    <ToggleButton value={5}>Руководитель</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
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