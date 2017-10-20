import React, { Component } from 'react';
//import './MainNewApplication.css'
import axios from 'axios';

class MainNewApplication extends Component {

    constructor(prop) {
       super(prop);

       this.state = {
           name : '',
           order : 'НИЗКИЙ',
           info : '',
           date : null
       };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeInfo = this.handleChangeInfo.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeOrder = this.handleChangeOrder.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name : event.target.value
        });
    }

    handleChangeOrder(event) {
        this.setState({
            order : event.target.value
        });
    }

    handleChangeInfo(event) {
        this.setState({
            info : event.target.value
        });
    }

    handleChangeDate(event) {
        this.setState({
            date : event.target.value
        });
    }

    handleSubmit(event) {
        var data = {
            name : this.state.name,
            order : this.state.order,
            info : this.state.info,
            date : this.state.date
        };
        console.log(data);

        axios.post('http://localhost:8080/new/application', {
            name: data.name,
            order: data.order,
            info: data.info,
            date: data.date
        }).then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        });

        event.preventDefault();
    }


    render() {
        return(
            <div className="wrap">
                <main rel="main" className="content">
                    <header className="content__header">
                        <h2>
                            Создание новой заявки
                        </h2>
                    </header>
                    <div className="content__applications">
                        <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChangeName} value={this.state.name} className="main-login__input" name="name" type="text" placeholder="Имя заявки"/>
                        <br/>
                        <select onChange={this.handleChangeOrder} value={this.state.order} className="main-login__input">
                            <option>НИЗКИЙ</option>
                            <option>СРЕДНИЙ</option>
                            <option>ВЫСОКИЙ</option>
                        </select>
                        <br/>
                        <textarea onChange={this.handleChangeInfo} value={this.state.info} placeholder="Описание заявки" className="main-login__input custom-textarea">
                        </textarea>
                        <br/>
                        <input onChange={this.handleChangeDate} value={this.state.date} type="datetime-local" className="custom-calendar"/>
                        <br/>
                        <button type="submit" className="custom-btn">создать заявку</button>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default MainNewApplication;