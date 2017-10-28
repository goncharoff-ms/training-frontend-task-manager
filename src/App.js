import React from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom'
import MainListApplication from './components/main/main_list_application/MainListApplication'
import MainLogin from './components/main/main_login/MainLogin'
import Header from './components/header/Header'
import MainNewApplication from './components/main/main_new_application/MainNewApplication'
import MainRegistration from './components/main/main_registration/MainRegistration'
import Error404 from './components/main/error404/error404'
import Store from './Store';

import './App.css'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store : new Store(),
            isLogin : false
        }
    }


    render() {
        if (this.state.isLogin) {
            return (
                <div>
                    <Header loggin={this.state.isLogin}/>
                    <Switch>
                        <Route exact path='/applications' component={MainListApplication}/>
                        <Route exact path='/new/applications' component={MainNewApplication} />
                        <Route path="/**" component={Error404} />
                    </Switch>
                </div>
            )
        } else {
            return(
                <div>
                    <Header loggin={this.state.isLogin}/>
                    <Switch>
                        <Route exact path='/sign-in' component={MainLogin}/>
                        <Route exact path='/sign-up' component={MainRegistration}/>
                        <Route path="/**" component={Error404} />
                    </Switch>
                </div>
            )
        }
    }

}

export default App;
