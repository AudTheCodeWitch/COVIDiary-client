import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

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
      </div>
    );
  }
}

export default App;
