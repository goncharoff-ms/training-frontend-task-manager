import React from 'react';
import { Router, Switch, Route} from 'react-router-dom'
import MainListApplication from './components/main/main_list_application/MainListApplication'
import MainLogin from './components/main/main_login/MainLogin'
import Header from './components/header/Header'
import MainNewApplication from './components/main/main_new_application/MainNewApplication'
import MainRegistration from './components/main/main_registration/MainRegistration'


import './App.css'



class App extends React.Component {
    render() {
        return (
            <div>
                <Header loggin={false}/>
                <Switch>
                    <Route exact path='/applications' component={MainListApplication}/>
                    <Route exact path='/new/applications' component={MainNewApplication} />
                    <Route exact path='/sign-in' component={MainLogin}/>
                    <Route exact path='/sign-up' component={MainRegistration}/>
                </Switch>
            </div>
        )
    }

}

export default App;
