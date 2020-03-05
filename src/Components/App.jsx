import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Navigation from './Menu/Navigation';
import Logo from './Menu/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Logo altText="logo" />
        <Navigation elements={['Home', 'Players', 'Games']}/>
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
        <div>
          <label htmlFor="hobby">Hobby: </label>
          <input id="hobby" type="text" placeholder="JavaScript"></input>
        </div>
      </header>
    </div>
  );
}

export default App;
