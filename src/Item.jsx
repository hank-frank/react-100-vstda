import React, { Component } from 'react';


class Item extends Component {


    render() {
        return (
         <div className="m-0">
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                {/* <div id="alert" className="alert alert-success">I'm an alert!</div>  */}
                <li id="alert" className="list-group-item-success clearfix rounded align-middle">I'm an alert
                    <input type='checkbox' className='float-left m-2 align-middle' />
                    <a className='edit-todo btn float-right text-success m-2 align-middle' 
                        name='edit-button'
                        href='#'>edit</a>
                    <a className='delete-todo btn float-right text-success m-2 align-middle' 
                        name='delete-button'
                        href='#'>delete</a>
                </li>
            </div>
        );
     }
  }
      
  export default Item;

