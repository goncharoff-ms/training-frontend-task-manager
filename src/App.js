import React from 'react';
import {Switch, Route, Redirect } from 'react-router'
import MainListApplication from './components/main/main_list_application/MainListApplication'
import MainLogin from './components/main/main_login/MainLogin'
import Header from './components/header/Header'
import MainNewApplication from './components/main/main_new_application/MainNewApplication'
import MainRegistration from './components/main/main_registration/MainRegistration'
import Error404 from './components/main/error404/error404'


import './App.css'


class App extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            user : {
                login : '',
                tokenString : 0,
            }
        }
    }

    setUserData = (loginNew, tokenStringNew) => {
        console.log(loginNew, tokenStringNew);
        if (String(loginNew).length > 0 && String(tokenStringNew).length) {
            this.setState({
                isLogin: true,
                user : {
                    userLogin : loginNew,
                    tokenString : tokenStringNew
                }
            });
        }
    };

    getUserData = () => {
      return this.state.user;
    };


    render() {
        if (this.state.isLogin) {
            return (
                <div>
                    <Header login={true}/>
                    <Switch>

                        <Route exact path='/applications'>
                            <MainListApplication user={this.getUserData.bind(this)} funcUser={this.setUserData.bind(this)}/>
                        </Route>

                        <Route exact path='/new/application' component={MainNewApplication} />

                        <Route exact path='/sign-in'>
                            <Redirect to="/applications"/>
                        </Route>

                        <Route exact path='/sign-up'>
                            <Redirect to="/applications"/>
                        </Route>

                        <Route path="/**" component={Error404}/>
                    </Switch>
                </div>
            )
        } else {
            return(
                <div>
                    <Header login={false}/>
                    <Switch>
                        <Route exact path='/sign-in'>
                            <MainLogin funcUser={this.setUserData.bind(this)}/>
                        </Route>

                        <Route exact path='/sign-up'>
                            <MainRegistration funcUser={this.setUserData.bind(this)}/>
                        </Route>

                        <Route path="/**">
                            <Redirect to="/sign-in"/>
                        </Route>
                    </Switch>
                </div>
            )
        }
    }

}



export default App;
