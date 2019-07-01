import React, { Component } from 'react';
import Item from './Item.jsx';
import Edit from './Edit.jsx';

class View extends Component {

    render() {
      return (
        <div className='container'>
          <div className="card">
              <div className="card-header">View to-dos</div>
              <ul className="list-group list-group-flush">
                <Item></Item>
              </ul>
          </div>
        </div>
      );
    }
  }



  // this is to be put into the onclick of the items edit button. Leaving it here already imported to remind how/what to call it. 
  <Edit></Edit>
  
  export default View;