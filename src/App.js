import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainListApplication from './components/main/main_list_application/MainListApplication'
import MainLogin from './components/main/main_login/MainLogin'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
              <Route path={['/','/index', '/app']} component={MainListApplication}/>
              <Route path='/login' component={MainLogin}/>
          </Switch>
      </div>
    );
  }
}

export default App;
