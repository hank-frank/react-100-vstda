import React, { Component } from 'react';
import Item from './Item.jsx';
import Edit from './Edit.jsx';

class View extends Component {
  constructor( props ) {
    super( props ); 
}


//leaving off with toDoList not registering as an array where the error is that .map isn't working. a console.log of props and of toDoList are coming throuhg correclty.??
    render() {
      return (
        <div>
          <div className="card w-100 rounded">
              <div className="card-header">View to-dos</div>
              <ul className="list-group">
                { this.toDoList.map(each => {
                  console.log(toDoList);
                  return (
                    <Item title={ each.title } priority={ each.priority }>{ each.title }</Item>
                  )
                })
                }
                <Edit></Edit>
              </ul>
          </div>
        </div>   
      );
    }
  }



  // this is to be put into the onclick of the items edit button. Leaving it here already imported to remind how/what to call it. 
  <Edit></Edit>
  
  export default View;