import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import FeedPage from '../../Routes/FeedPage/FeedPage'
import SearchPage from '../../Routes/SearchPage/SearchPage'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-main">
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />

            <Route
              path={'/login'}
              component={LoginPage}
            />

            <Route
              path={'/register'}
              component={RegistrationPage}
            />

            <Route
              path={'/feed'}
              component={FeedPage}
            />

            <Route
              path={'/search'}
              component={SearchPage}
            />

          </Switch>
        </main>
      </div>
    )
  }
}