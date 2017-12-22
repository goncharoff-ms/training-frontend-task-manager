import React, { Component } from 'react';

import axios from 'axios';
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button, FormControl} from "react-bootstrap";
import Applications from './Application'
import ActiveWindow from "./ActiveWindow";
import FormGroup from "react-bootstrap/es/FormGroup";

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


        //params.append('sortedByOrder', 'true');

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

  clickSearch = (e) => {

    if(!(e.key === 'Enter')) {
        return;
    }


    let params = new URLSearchParams();

    let login = this.state.user.userLogin;
    let token = this.state.user.tokenString;

    params.append('userLogin', login);
    params.append('token', token);
    params.append('searchWord', this.searchWord.value);

    console.log(this.searchWord.value);

    axios.get('http://localhost:8080/applications', {
      params: params
    }).then((response) => {
      console.log(response);
      this.setState({
        posts : response.data,
        btn : {
          all : false,
          history: false
        }
      });
    }).catch( (error) => {
      console.log(error.response);
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

    loadByOrder = (event) => {
      let solve = +event.target.value;
      console.log("solve = ", solve);
      let params = new URLSearchParams();

      let login = this.state.user.userLogin;
      let token = this.state.user.tokenString;

      params.append('userLogin', login);
      params.append('token', token);

        if(solve === 2) {
          params.append('sortedByOrder', 'UPDOWN');
        } else if(solve === 1) {
          params.append('sortedByOrder', 'DOWNUP');
        } else {
            return;
        }

      axios.get('http://localhost:8080/applications', {
        params: params
      }).then((response) => {
        console.log(response);
        this.setState({
          posts : response.data,
          btn : {
            all : false,
            history: false
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
                                <Col xs={6}>
                                    <Button active={this.state.btn.all} onClick={this.showAllApp}>
                                        Все активные заявки
                                    </Button>
                                    <Button active={this.state.btn.history} onClick={this.showHistoryApp}>
                                        История моих подписей
                                    </Button>
                                </Col>

                                <Col xsOffset={2} xs={4}>
                                    <FormGroup>
                                        <FormControl onChange={this.loadByOrder} componentClass="select" placeholder="фильтр по приоритету">
                                            <option value="-1">...</option>
                                            <option value="2">Высокий -> Низкий</option>
                                            <option value="1">Низкий -> Высокий</option>
                                        </FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl inputRef={(input) => { this.searchWord = input; }}
                                                     onKeyPress={this.clickSearch}
                                                     type="text"
                                                     placeholder="Поиск по названию"/>
                                    </FormGroup>
                                </Col>
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
