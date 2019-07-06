import React, { Component } from 'react';
import Item from './Item.jsx';

class View extends Component {
  constructor( props ) {
    super( props ); 

    this.state = {
      toDoList : [],
    };
    this.clickEdit = this.clickEdit.bind(this)
}

    render() {
      return (
        <div>
          <div className="card w-100 rounded">
              <div className="card-header">View to-dos</div>
              <ul className="list-group">
                { this.props.toDoList.map((each) => {
                  return (
                    <Item 
                      key={ each.id } 
                      title={ each.title } 
                      priority={ each.priority }
                      completed={ each.completed }
                      id={ each.id }
                      isBeingEdited={ each.isBeingEdited }
                      toDoList={ this.state.toDoList }
                      clickEdit={ this.clickEdit }
                      
                      >{ each.title }</Item>
                  )
                })
                }
                { console.log(this.props.toDoList )}
                { console.log(clickEdit)}
              </ul>
          </div>
        </div>   
      );
    }
  }
  
  export default View;
