import React from 'react';
import {Switch, Route, Redirect } from 'react-router'
import MainListApplication from './components/MainListApplication'
import MainLogin from './components/MainLogin'
import Header from './components/Header'
import MainNewApplication from './components/MainNewApplication'
import MainRegistration from './components/MainRegistration'
import UserImPage from './components/UsersImPage'
import Error404 from './components/error404'


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
        console.log('[App.js] log and token: ' ,loginNew, tokenStringNew);
        if (String(loginNew).length > 0 && String(tokenStringNew).length) {
            this.setState({
                isLogin: true,
                user : {
                    userLogin : loginNew,
                    tokenString : tokenStringNew
                }
            });
        } else {
            this.setState({
                isLogin: false,
                user : {
                    userLogin : '',
                    tokenString: ''
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
                    <Header funcUser={this.setUserData.bind(this)} login={true}/>
                    <Switch>

                        <Route exact path='/applications'>
                            <MainListApplication user={this.getUserData.bind(this)} funcUser={this.setUserData.bind(this)}/>
                        </Route>

                        <Route exact path='/new/application'>
                            <MainNewApplication user={this.getUserData.bind(this)} funcUser={this.setUserData.bind(this)}/>
                        </Route>

                        <Route exact path='/users/im'>
                            <UserImPage user={this.getUserData.bind(this)} funcUser={this.setUserData.bind(this)}/>
                        </Route>

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
                    <Header funcUser={this.setUserData.bind(this)} login={false}/>
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
