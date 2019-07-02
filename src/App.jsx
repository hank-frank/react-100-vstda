import React, { Component } from 'react';
import Add from './Add.jsx';
import View from './View.jsx';
import Edit from "./Edit.jsx";

class App extends Component {

  const testData = [
    {
      todo: 'Shave back hair',
      priority: 2,
      completed: false,
      id: 0,
      editEnabled: false
    },
    {
      todo: 'Get invading birds out of house',
      priority: 1,
      completed: false,
      id: 1,
      editEnabled: false
    },
    {
      todo: 'Find 100 lost bitcoins',
      priority: 3,
      completed: false,
      id: 2,
      editEnabled: false
    }
    {
      todo: 'Feed creature under the bed',
      priority: 2,
      completed: false,
      id: 3,
      editEnabled: false
    }
    {
      todo: "Don't get eaten by a tiger today" ,
      priority: 1,
      completed: false,
      id: 4,
      editEnabled: false
    }
  ]

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
