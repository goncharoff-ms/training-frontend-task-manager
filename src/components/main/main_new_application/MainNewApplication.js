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
        let params = new URLSearchParams();
        let login = document.getElementById("login_id").value;
        let password = document.getElementById("password_id").value;
        let name = document.getElementById("name_id").value;
        let surname = document.getElementById("surname_id").value;
        let passwordRepeat = document.getElementById("password_repeat_id").value;
        let email = document.getElementById("email_id").value;
        let about = document.getElementById("about_id").value;
        let inviteToken = document.getElementById("invite_token_id").value;

        params.append('login', login);
        params.append('password', password);
        params.append('name', name);
        params.append('surname', surname);
        params.append('email', email);
        params.append('about', about);
        params.append('token_invite', inviteToken);

        axios.post('http://localhost:8080/sign-up', params)
            .then((response) => {
                console.log(response);
                this.props.funcUser(response.data.userLogin, response.data.token);
            })
            .catch( (error) => {
                console.log(error);
            });

        event.preventDefault();
    }


    render() {
        return(
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
        );
    }
}

export default MainNewApplication;