import React, { Component } from 'react';
import { render } from 'react-dom';
import ProfileMenu from './ProfileMenu';
import DropdownMenu from './DropdownMenu';

// React component
export default class AdminCenterForm extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      group: 'HR Group',
      category: 'Warning'
    };
  }

  onGroupChange(ev) {
    this.setState({group: ev.target.value});
  }

  onCategoryChange(ev) {
    this.setState({category: ev.target.value});
  }

  onMessageChange(ev) {
    this.setState({msg: ev.target.value});
  }

  sendNotification() {
    this.props.notifSend({
      message: this.state.msg,
      group: this.state.group,
      category: this.state.category
    });
  }

  render() {
    let { msg, group, category } = this.state;
    const groups = ['HR Group', 'IT Group'];
    const categories = ['Warning', 'Information', 'Positive'];

    return (
      <div className="admin-center">
        <ProfileMenu name="Tim Lange"/>

        <div className="messageFormContainer admin-form box">
          <h3 className="sendMessageTitle">Send Notification</h3>
          <form className="createMessageForm form-group">
              <textarea placeholder="Please enter your message here."
                        className="messageInput form-control"
                        value={msg}
                        onChange={::this.onMessageChange}>
              </textarea>

            <DropdownMenu label="Group"
                          options={groups}
                          selectedOption={group}
                          onChangeHandler={::this.onGroupChange}/>

            <DropdownMenu label="Category"
                          options={categories}
                          selectedOption={category}
                          onChangeHandler={::this.onCategoryChange}/>

            <div className="clearfix">
                <span onClick={::this.sendNotification}>
                  <a className="btn btn-lg btn-primary pull-right" href="#" role="button">
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span>Send</span>
                  </a>
                </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
