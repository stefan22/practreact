import React, { Component } from 'react';
import './scss/App.scss';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />

        </header>
      </div>
    );
  }
}

export default App;
