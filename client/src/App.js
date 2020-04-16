import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import auth from './auth';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  // test fetch
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/users/1/entries')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route path="/login" render={() => auth.login()} />
        <Route
          path="/logout"
          render={() => {
            auth.logout()
            console.log('logged out')
            return <></>
          }}
        />
        <Route path="/callback" render={() => {
          auth.handleAuthentication(() => {
            // NOTE: Uncomment the following lines if you are using axios
            //       to set the axios authentication headers
            axios.defaults.headers.common = {
              Authorization: auth.authorizationHeader()
            }
          })
          return <></>
        }}
        />
      </div>
    );
  }
}

export default App;
