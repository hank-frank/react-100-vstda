import React, { Component } from 'react';


class Edit extends Component {


    render() {
        return (
         <div className='container'>
                {/* will need to come back and set alert type in className to auto-pop types are success, warning, danger, primary */}
                <div id="alert" className="alert alert-success">
                <div className="form-group">
                     <label for="comment">Description:</label>
                    <textarea className="form-control" rows="5" id="comment" placeholder="Describe the stuff you need done..."></textarea>
                </div>
                <div className="form-group">
                    <label for="edit-priority">Priority:</label>
                    <select className="form-control" id="edit-priority">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Save</button>
                </div>
                </div>
            </div> 
        </div>
        );
     }
  }
      
  export default Edit;