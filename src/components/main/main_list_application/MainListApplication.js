import React, { Component } from 'react';

import {} from 'react-bootstrap'
import axios from 'axios';
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Applications from './../application/Application'
import ActiveWindow from "./../active_window/ActiveWindow";

/*
 [
 {
 name : "Имя заявки",
 dif : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni delectus, maxime quidem consequatur magnam dolor quia. Sapiente expedita neque velit doloremque numquam consectetur tenetur nihil mollitia, hic, totam nemo.",
 date :  "до 10.12.2017, 14:50",
 order : "ВЫСОКИЙ"
 },
 {
 name : "Имя заявки",
 dif : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni delectus, maxime quidem consequatur magnam dolor quia. Sapiente expedita neque velit doloremque numquam consectetur tenetur nihil mollitia, hic, totam nemo.",
 date :  "до 10.12.2017, 14:50",
 order : "ВЫСОКИЙ"
 },
 {
 name : "Имя заявки",
 dif : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni delectus, maxime quidem consequatur magnam dolor quia. Sapiente expedita neque velit doloremque numquam consectetur tenetur nihil mollitia, hic, totam nemo.",
 date :  "до 10.12.2017, 14:50",
 order : "ВЫСОКИЙ"
 },
 {
 name : "Имя заявки",
 dif : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magni delectus, maxime quidem consequatur magnam dolor quia. Sapiente expedita neque velit doloremque numquam consectetur tenetur nihil mollitia, hic, totam nemo.",
 date :  "до 10.12.2017, 14:50",
 order : "ВЫСОКИЙ"
 }
 ]
 */

class MainListApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user(),
            posts :  [],
            isActiveWindow: false
        }
    }

    componentDidMount() {

        let params = new URLSearchParams();

        console.log('this.state.user.userLogin',this.state.user.userLogin);
        console.log('this.state.user.tokenString', this.state.user.tokenString);

        let login = this.state.user.userLogin;
        let token = this.state.user.tokenString;

        params.append('userLogin', login);
        params.append('token', token);

        axios.get('http://localhost:8080/applications', {
            params: params
        }).then((response) => {
            console.log(response);
            this.setState({ posts : response.data });
        }).catch( (error) => {
            console.log(error.response);
        });

    };

    clickActiveWindow = (prop) => {
        this.setState(prevState => ({
            isActiveWindow: !prevState.isActiveWindow
        }));
    };







    render() {
        return (
            <Grid>
                <ActiveWindow activeFunc={this.clickActiveWindow.bind(this)}
                              active={this.state.isActiveWindow}/>
                <Row>
                    <Col xsOffset={1} xs={10}>
                        <PageHeader>Все активные заявки</PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col xsOffset={1} xs={10}>
                        <Applications posts={this.state.posts}/>
                    </Col>
                </Row>


            </Grid>
        );
    }
}


export default MainListApplication;
