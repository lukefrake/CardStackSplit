import React, { Component } from 'react';
import Stacker from './components/Stacker/Stacker';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Stacker/>
        <Stacker behaviour="secondary"/>
      </div>
    );
  }
}

export default App;
