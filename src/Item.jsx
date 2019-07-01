import React, { Component } from 'react';


class Item extends Component {


    render() {
        return (
         <div className='container'>
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                {/* <div id="alert" className="alert alert-success">I'm an alert!</div>  */}
                <li id="alert" className="list-group-item alert alert-success">I'm an alert
                <input type='checkbox' className='float-left' />
                <a className='edit-todo btn float-right text-success' 
                        name='edit-button'
                        href='#'></a>
                 <a className='delete-todo btn float-right text-success' 
                        name='delete-button'
                        href='#'></a>
                </li>
            </div>
        );
     }
  }
      
  export default Item;

