import React, {Component} from 'react';
import '../sass/index.scss';

export default class App extends Component {
  render() {
    return (
    <div className="admin-center">
      <div className="admin-form box">
        <h3>Send notification</h3>
        <form className="form-group">
          <textarea className="notificationMessage form-control" placeholder="Enter message" />
          <div className="dropdown">
            <label for="exampleInputName2">Category</label>
            <select className="form-control">
              <option>Alert</option>
              <option>Warning</option>
              <option>Information</option>
              <option>Promotion</option>
            </select>
          </div>
          <div className="dropdown">
            <label for="exampleInputName2">Group</label>
            <select className="form-control">
              <option>All users</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Support</option>
            </select>
          </div>
          <div className="clearfix">
            <a className="btn btn-lg btn-primary pull-right" href="#" role="button">
              <i className="fa fa-share" aria-hidden="true"></i>Send</a>
          </div>
        </form>
      </div>
    </div>
    );
  }
}
