import React, { Component } from 'react';


class Item extends Component {
    constructor( props ) {
        super( props );
    
        this.state = {
         title: this.props.title,
         priority: this.props.priority,
         isBeingEdited: this.props.isBeingEdited,
        };
    
        this.onChange = this.onChange.bind(this)
        this.setPriorityColor = this.setPriorityColor.bind(this)
        this.displayEdit = this.displayEdit.bind(this)
        this.displayNormalItem = this.displayNormalItem.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

    setPriorityColor(priority) {
    console.log(priority)
       if (priority == 1) {
           console.log("priority: 1")
           return "list-group-item-danger"
        } else if (priority == 2) {
            console.log("priority: 2")
           return "list-group-item-warning"
        } else if (priority == 3) {
            console.log("priority: 3")
          return  "list-group-item-success"
           }
       }

    displayEdit( isBeingEdited ) {
        console.log( isBeingEdited )
        if ( isBeingEdited ) {
            return "block";
        } else {
            return "none";
        }
    }

    displayNormalItem ( isBeingEdited ) {
        if ( isBeingEdited ) {
            return "none";
        } else {
            return "block";
        }
    }

    render() {
        return (
        <div className="container"> 
        <div className="m-0"
             name="normalEdit"
             style={{ display: this.displayNormalItem(this.props.isBeingEdited) }}>
                 {/* { display: this.displayNormalItem(this.props.isBeingEdited) } */}
            <li id="alert"
                name={ this.props.priority }
                className={ `${ this.setPriorityColor(this.props.priority) } clearfix align-middle` }>
                    <input type='checkbox'
                        // checked={  }
                        className='float-left m-2 align-middle'
                        // onClick={  }
                        name="done" />
                        <div className='float-left m-2 align-middle' id="display-text">{ this.props.title }</div>
                        <a className='delete-todo btn float-right text-success m-2 align-middle' 
                            onChange={ this.onChange } 
                            name='deleteButton'
                            value={ this.state.deleteButton }
                            href='#'>delete</a>
                        <a className='edit-todo btn float-right text-success m-2 align-middle'
                            onClick={ () => this.props.clickEdit(this.props.id) }  //leaving off here. clickEdit isn't making it App => View => Item yet... props not being passed properly. pick up here. 
                            name='editButton'
                            // value={ this.state.editButton }
                            href='#'>edit</a>
                </li>
            </div>

        <div className="m-0"
            name="editItem"
            style={{ display: this.displayEdit(this.props.isBeingEdited) }}>
                {/* { display: this.displayEdit(this.props.isBeingEdited) } */}
            <li id="alert"
                name={ this.props.priority }
                className={ `${ this.setPriorityColor(this.props.priority) } clearfix align-middle` }>
                <div className="form-group m-4">
                   <label for="comment">Description:</label>
                   <textarea 
                        className="update-todo-text form-control" 
                        rows="5" id="comment" 
                        placeholder="Describe the stuff you need done..."
                        name="title"
                        onChange={ this.onChange }
                        value={ this.state.title }></textarea>
                </div>
                <div className="form-group m-4">
                    <label for="priority">Priority:</label>
                    <select 
                        className="update-todo-priority form-control mb-4" 
                        id="priority"
                        name="priority"
                        onChange={ this.onChange }
                        value={ this.state.priority }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                <div className="form-group m-4">
                <div className="text-right">
                    <button 
                    className="update-todo btn btn-primary btn-lg"
                    onClick={ () => this.props.saveEdit(this.props.id, this.state.title, this.state.priority) }
                    >Save</button>
                </div>
                </div>
                </div>
            </li> 
        </div>
        </div>
    );};
}
      
  export default Item;

