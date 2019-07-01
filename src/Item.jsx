import React, { Component } from 'react';


class Item extends Component {


    render() {
        return (
         <div className='container'>
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                {/* <div id="alert" className="alert alert-success">I'm an alert!</div>  */}
                <li id="alert" className="alert alert-success">I'm an alert</li>
            </div>
        );
     }
  }
      
  export default Item;

