import React, { Component } from 'react';
import Add from './Add.jsx';
import View from './View.jsx';
import Edit from "./Edit.jsx";

class App extends Component {

  render() {
    return (
      <div 
      className="container pt-2">
        <div id="title">
          <h1 className="text-light">A Very Simple To-Do App:</h1>
          <p className="text-light font-weight-light">I'll keep track of like, all your stuff...</p>
          <hr className="my-4 text-light"></hr>
        </div>
       <div className="row">
        <Add></Add>
        <View></View>
        </div>

        {/* Will be removed just here to test */}
        <Edit></Edit>
      </div>
    );
  }
}

export default App;
