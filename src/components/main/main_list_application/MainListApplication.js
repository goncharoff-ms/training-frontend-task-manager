import React, { Component } from 'react';
import Application from './../application/Application'
import {} from 'react-bootstrap'
import axios from 'axios';
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {PageHeader} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ActiveWindow from "./../active_window/ActiveWindow";

class MainListApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts :  [
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
             ],
            isActiveWindow: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/applications')
            .then(res => {
                console.log(res);
                this.setState({ posts : res.data });
            });

    }

    clickActiveWindow = (prop) => {
        document.getElementById('bodyApp').classList.add('activeWindowFix');
        this.setState(prevState => ({
            isActiveWindow: !prevState.isActiveWindow
        }));
    };

    clickCallBackActive = (prop) => {
        document.getElementById('bodyApp').classList.remove('activeWindowFix');
        this.setState(prevState => ({
            isActiveWindow: !prevState.isActiveWindow
        }));
    };


    render() {
        return (
            <Grid>
                <ActiveWindow activeFunc={this.clickCallBackActive.bind(this)}
                              active={this.state.isActiveWindow}/>
                <Row>
                    <Col xsOffset={1} xs={10}>
                        <PageHeader>Все активные заявки</PageHeader>
                    </Col>
                </Row>
                <Application dataPosts={this.state.posts}
                             activeFunc={this.clickActiveWindow.bind(this)}/>
            </Grid>
        );
    }
}

/*


 */

export default MainListApplication;
