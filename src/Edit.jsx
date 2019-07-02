import React, { Component } from 'react';


class Edit extends Component {


    render() {
        return (
         <div className="m-0">
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                <li id="alert" className="list-group-item-success clearfix rounded">
                <div className="form-group m-4">
                     <label for="comment">Description:</label>
                    <textarea className="update-todo-text form-control" rows="5" id="comment" placeholder="Describe the stuff you need done..."></textarea>
                </div>
                <div className="form-group m-4">
                    <label for="edit-priority">Priority:</label>
                    <select className="update-todo-priority form-control mb-4" id="edit-priority">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                <div className="form-group m-4">
                <div className="text-right">
                    <button className="update-todo btn btn-primary btn-lg">Save</button>
                </div>
                </div>
                </div>
            </li> 
        </div>
        );
     }
  }
      
  export default Edit;