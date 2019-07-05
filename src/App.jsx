import React, { Component } from 'react';
import Add from './Add.jsx';
import View from './View.jsx';
import Edit from "./Edit.jsx";

let testData = [
  {
    title: 'Shave back hair',
    priority: 2,
    completed: false,
    id: 0,
    isBeingEdited: false
  },
  {
    title: 'Get invading birds out of house',
    priority: 1,
    completed: false,
    id: 1,
    isBeingEdited: false
  },
  {
    title: 'Find 100 lost bitcoins',
    priority: 3,
    completed: false,
    id: 2,
    isBeingEdited: false
  },
  {
    title: 'Feed creature under the bed',
    priority: 2,
    completed: false,
    id: 3,
    isBeingEdited: false
  },
  {
    title: "Don't get eaten by a tiger today" ,
    priority: 1,
    completed: false,
    id: 4,
    isBeingEdited: false
  }
]

let toDoList = [];
let id = 0; 

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toDoList : [],
    };

    this.addToDoItem = this.addToDoItem.bind(this);
    // this.deleteToDoItem - this.deleteToDoItem.bind(this);
  }


  addToDoItem(title, priority) {
    // console.log (title);
    // console.log(priority);
    let newToDoItem =  {
      //var's title and priority here are already holding the state of the value of the input elements, set as their values by the onChange in Add and passed in to this throuhg the props. of onClick of the button in the Add component. 
      title: title,
      priority: priority,
      completed: false,
      id: id,
      isBeingEdited: false
    }
    //pushing the to-Do-item(not the state.toDoItem since its title/priority are already stateful vars) into the state. of the toDoList. 
    this.state.toDoList.push(newToDoItem);
    //Also useing .setState on the global toDoList to make its this.state refelet the current value of it from within this function/click. This is what makes the <Add> below have access to toDoList.title etc.
    this.setState({ toDoList: this.state.toDoList });
    id++; 
    // logs with the correctly built object!!!!! id is incrememting too!!!
    console.log(this.state.toDoList);
  };

  // deleteToDoItem(completed, id) {

  //     console.log(completed);
  // };

  render() {
    return (
      <div className="container">
        <div id="title">
          <h1 className="text-light">A Very Simple To-Do App:</h1>
          <p className="text-light font-weight-light">I'll keep track of like, all your stuff...</p>
          <hr className="my-4 text-light"></hr>
        </div>
       <div className="d-flex justify-content-around">
         <div className="p2 mr-4" style={{width: '40%'}}>
           <Add
             addToDoItem={ this.addToDoItem }
           ></Add>
         </div>
         <div className="p2" style={{width: '60%'}}>
           <View
              toDoList={ this.state.toDoList }
           ></View>
         </div>
        </div>
      </div>
    );
  }
}
{/* <div className="p2 w-25 mr-3" style={{width: '40%'}}>
<div className="p2 w-75" style={{width: '60%'}}> */}

export default App;


// title={ toDoList.title }
// priority={ toDoList.priority }
// completed={ toDoList.completed }
// id={ toDoList.id }
// isBeingEdited={ toDoList.isBeingEdited }