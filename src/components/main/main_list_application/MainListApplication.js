import React, { Component } from 'react';
import './MainListApplication.css';
import ActiveWindow from './../activeWindow/ActiveWindow'
import Application from './../application/Application'
import axios from 'axios';

class MainListApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /*posts :  [
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
             ],*/
            isActiveWindow: false,
            posts: []
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
            <div>
                <ActiveWindow activeFunc={this.clickCallBackActive.bind(this)}
                              active={this.state.isActiveWindow}/>
                <div className="wrap">
                    <main rel="main" className="content">
                        <header className="content__header">
                            <h2>
                                Все активные заявки
                            </h2>
                        </header>
                        <div className="content__applications">
                            <Application dataPosts={this.state.posts}
                                         activeFunc={this.clickActiveWindow.bind(this)}/>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default MainListApplication;
