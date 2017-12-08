import React, { Component } from 'react';

import {} from 'react-bootstrap'
import axios from 'axios';
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Applications from './Application'
import ActiveWindow from "./ActiveWindow";

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
            isActiveWindow: false,
            ownerActiveEvent : {},
            btn : {
                all : false,
                history : false
            }
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
            this.setState({
                posts : response.data,
                btn : {
                    all : true,
                    history: false
                }
            });
        }).catch( (error) => {
            console.log(error.response);
        });

    };

    clickActiveWindow = (owner = {}) => {
        this.setState(prevState => ({
            isActiveWindow: !prevState.isActiveWindow,
            ownerActiveEvent: owner
        }));
    };

    outputAccept = (key, idApp) => {
        let params = new URLSearchParams();

        console.log(this.state.posts.length);
        let login = this.state.user.userLogin;
        let token = this.state.user.tokenString;
        params.append('userLogin', login);
        params.append('token', token);
        params.append('idApp', +idApp);

        axios.post('http://localhost:8080/applications/sign', params)
            .then( (response) => {
                console.log('Подписали заявку: ', response);
                this.state.posts.splice(key , 1);
                this.setState(prevState => ({
                    posts : prevState.posts
                }));
                console.log(this.state.posts.length);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    showAllApp = () => {
        this.componentDidMount();
    };

    showHistoryApp = () => {
        let params = new URLSearchParams();

        let login = this.state.user.userLogin;
        let token = this.state.user.tokenString;

        console.log(login, token);

        params.append('userLogin', login);
        params.append('token', token);

        axios.get('http://localhost:8080/applications/history', {
            params: params
        }).then((response) => {
            console.log(response);
            this.setState({
                posts : response.data,
                btn : {
                    all : false,
                    history : true
                }
            });
        }).catch( (error) => {
            console.log(error.response);
        });
    };


    render() {
        return (
            <Grid>
                <ActiveWindow activeFunc={this.clickActiveWindow.bind(this)} accept={this.outputAccept}
                              active={this.state.isActiveWindow} owner={this.state.ownerActiveEvent}/>
                <Row>
                    <Col xsOffset={1} xs={10}>
                        <PageHeader>
                            <Row>
                                <Button active={this.state.btn.all} onClick={this.showAllApp}>
                                    Все активные заявки
                                </Button>
                                <Button active={this.state.btn.history} onClick={this.showHistoryApp}>
                                    История моих подписей
                                </Button>
                            </Row>
                        </PageHeader>
                    </Col>
                </Row>

                <Row>
                    <Col xsOffset={1} xs={10}>
                        <Applications history={this.state.btn.history} activeFunc={this.clickActiveWindow.bind(this)} posts={this.state.posts}/>
                    </Col>
                </Row>


            </Grid>
        );
    }
}


export default MainListApplication;
