import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Investment Property 4 Square Analysis</h1>
          </header>
          <Calculator/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
