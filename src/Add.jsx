import React, { Component } from 'react';


class Add extends Component {

  render() {
    return (
      <div className="container pt-2">
        <div className="card">
        <div className="card-header">Add a to-do item
          </div>
        <div className="card-body">
            <div className="form-group">
                <label for="comment">A new to-do</label>
                <textarea className="form-control" rows="5" id="comment" placeholder="What do you need to do?"></textarea>
            </div>
            <div className="form-group">
                <label for="edit-priority">Priority:</label>
                <select className="form-control" id="edit-priority">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            </div>
           <div className="card-footer">
          <button className="btn btn-primary">Add</button>
          </div>
          </div>
      </div>
    );
  }
}

export default Add;