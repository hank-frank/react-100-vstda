import React, { Component } from 'react';
import Add from './Add.jsx';
import View from './View.jsx';

let toDoList = [];
let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toDoList : [],
    };
    
    this.addToDoItem = this.addToDoItem.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
    this.setState({ 
      toDoList: this.state.toDoList 
    });
    console.log("test from add" + this.state.toDoList);
    id++; 
  };

  
  clickEdit( id ) {
    console.log("clickEdit Test id:" + id)
    let tempItem = this.state.toDoList;
    //for each item of the array(each to do item) if the id matches on the list and with an id in the toDoList change the tempitems isBeingEdited to true
    for (let i = 0; i < tempItem.length; i++) {
      if (tempItem[i].id == id) { 
        tempItem[i].isBeingEdited = true; 
      }
    }
    //then set the state of the toDoLIst to be the tempItem version with an item now showing it's isBeing edited as true. 
    this.setState({
      toDoList: tempItem
    });
  }
  
  saveEdit( id, title, priority ) {
    console.log("saveEdit Test: " + "id: " + id + " title: " + title + " prioroty: " + priority );
    
    let tempSaveItem = this.state.toDoList;
    for (let i = 0; i < tempSaveItem.length; i++) {
      if (tempSaveItem[i].id == id) { 
          tempSaveItem[i].isBeingEdited = false;
          tempSaveItem[i].title = title;
          tempSaveItem[i].priority = priority;
        }
    }
   
    this.setState({
      toDoList: tempSaveItem
    });
}

itemCompleted( id ) {
  let tempCompleteItem = this.state.toDoList;
    // console.log(tempCompleteItem)
    for (let i = 0; i < tempCompleteItem.length; i++) {
      // console.log(i)
      if (tempCompleteItem[i].id == id) { 
        tempCompleteItem[i].completed = !tempCompleteItem[i].completed; 
      }
    }

  this.setState ({
    toDoList: tempCompleteItem
  })
}

deleteItem( id ) {
  console.log("delete item test: " + id )
  let tempDelete = this.state.toDoList.filter((currentItem) => {
    if (currentItem.id !== id) {
      return currentItem;
    }
  });
  // console.log(tempDelete);
  this.setState({ 
    toDoList: tempDelete 
  });
  //this is the console.log from within this funciton that is showing the incorrect number of objects in the toDoList array. 
  console.log("toDoList from delete: " + this.state.toDoList);
}

  render() {
    return (
      <div className="container">
        <div id="title">
          <h1 className="text-light mt-3">A Very Simple To-Do App:</h1>
          <p className="text-light font-weight-light">I'll keep track of like, all your stuff...</p>
          <hr className="my-4 text-light"></hr>
        </div>
       <div className="d-flex justify-content-around">
         <div className="p2 mr-4" style={{width: '40%'}}>
           <Add
             addToDoItem={ this.addToDoItem }
             ></Add>
         </div>
         <div className="m-0" style={{width: '60%'}}>
           <View
              toDoList={ this.state.toDoList }
              clickEdit={ this.clickEdit }
              saveEdit={ this.saveEdit }
              itemCompleted={ this.itemCompleted }
              deleteItem={ this.deleteItem }
              ></View>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
