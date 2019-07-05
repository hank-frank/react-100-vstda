import React, { Component } from 'react';


class Item extends Component {
    constructor( props ) {
        super( props );
    
        this.state = {
         toDoList: this.props.toDoList,
         title: this.props.title,
         priority: this.props.priority,
        };
    
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

    render() {
        return (
         <div className="m-0">
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                {/* <div id="alert" className="alert alert-success">I'm an alert!</div>  */}
                <li id="alert" className="list-group-item-success clearfix rounded align-middle">{ this.props.toDoList }
                    <input type='checkbox'
                        checked={ this.props.completed }
                        className='float-left m-2 align-middle'
                        onChange={ this.onChange }
                        name="done" />
                    <a className='edit-todo btn float-right text-success m-2 align-middle'
                        onChange={ this.onChange } 
                        name='editButton'
                        value={ this.state.editButton }
                        href='#'>edit</a>
                    <a className='delete-todo btn float-right text-success m-2 align-middle' 
                        onChange={ this.onChange } 
                        name='deleteButton'
                        value={ this.state.deleteButton }
                        href='#'>delete</a>
                </li>
            </div>
        );
     }
  }
      
  export default Item;

