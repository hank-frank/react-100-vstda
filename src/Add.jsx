import React, { Component } from 'react';


class Add extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      title: "", 
      priority: "",
    };

    this.onChange = this.onChange.bind(this)
}
  
//capturing the changes in the elements below with their onChange set to this.onChange. 
onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="card rounded">
        <div className="card-header">Add a to-do item
          </div>
        <div className="card-body">
            <div className="form-group">
                <label htmlFor="title">A new to-do</label>
                <textarea 
                  name="title"
                  className="create-todo-text form-control" 
                  rows="5" 
                  id="title" 
                  placeholder="What do you need to do?"
                  // using value of textarea to capture the contents of the textarea for use, captured with onchange, set as value and used below as {this.state.title}
                  value={ this.state.title }
                  onChange={ this.onChange }
                  ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority:</label>
                <select 
                  className="create-todo-priority form-control" 
                  id="priority"
                  name="priority"
                  // using the value of the select to capture the contents of the select for use, captured with the onchange, set as value, value used below as {this.state.priority} to export
                  value={ this.state.priority }
                  onChange={ this.onChange }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            </div>
           <div className="card-footer">
            <div className="text-right">
              {/* this onClick is exporting the state/properties of title/priority that are captured above w/ the onChange and set as the value so that they are accessable with in the main APP class to be passed into the addToDoItem function this.props is needed apparently to pass the properties, otherwise they weren't getting through. */}
            <button className="create-todo btn btn-primary btn-block rounded" onClick={() => this.props.addToDoItem(this.state.title, this.state.priority)}>Add</button>
            
            </div>
            </div>
      </div>
      </div>
    );
  }
}

export default Add;