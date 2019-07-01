import React, { Component } from 'react';


class Add extends Component {

  render() {
    return (
      <div className="container">
        <div className="card w-50">
        <div className="card-header">Add a to-do item
          </div>
        <div className="card-body">
            <div className="form-group">
                <label for="comment">A new to-do</label>
                <textarea className="create-todo-text form-control" rows="5" id="comment" placeholder="What do you need to do?"></textarea>
            </div>
            <div className="form-group">
                <label for="edit-priority">Priority:</label>
                <select className="create-todo-priority form-control" id="edit-priority">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            </div>
           <div className="card-footer">
            <div className="text-right">
            <button className="btn btn-primary btn-block">Add</button>
            
            </div>
            </div>
      </div>
      </div>
    );
  }
}

export default Add;