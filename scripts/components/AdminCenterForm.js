import React, { Component } from 'react';
import { render } from 'react-dom';
import ProfileMenu from './ProfileMenu';
import DropdownMenu from './DropdownMenu';
import ActionButton from './ActionButton';

// React component
export default class AdminCenterForm extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      group: 'All',
      category: 'New feature',
      urlLink: '',
      actionButtonName: 'Send',
      actionButtonStatus: ''
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

  onUrlLinkChange(ev) {
    this.setState({urlLink: ev.target.value});
  }

  onActionButtonStateChange() {
    this.setState({
      msg: '',
      group: 'All',
      category: 'New feature',
      urlLink: '',
      actionButtonName: 'Send',
      actionButtonStatus: ''
    });
    $(".character-count").text("140 characters left.");
  }

  sendNotification() {
    this.props.notifSend({
      message: this.state.msg,
      group: this.state.group,
      category: this.state.category,
      urlLink: this.state.urlLink
    });
    this.setState({
      actionButtonName: 'Sent',
      actionButtonStatus: 'success'
    });
  }

  render() {
    let { msg, group, category, urlLink } = this.state;
    const groups = ['All',
                    'G2M Customers', 'G2M TechOps', 'G2M Admins',
                    'G2A Customers', 'G2A TechOps', 'G2A Admins',
                    'G2W Customers', 'G2W TechOps', 'G2W Admins'];
    const categories = ['New Feature', 'Bug Fix', 'Outage', 'Terms Change', 'World Domination', 'Other'];

    return (
      <div className="admin-center">
        <ProfileMenu name="Mr. C. E. O."/>

        <div className="messageFormContainer admin-form box">
          <h3 className="sendMessageTitle">Send Notification</h3>
          <form className="createMessageForm form-group">
              <textarea placeholder="Please enter your message here."
                        className="messageInput form-control"
                        maxLength="140"
                        value={msg}
                        onChange={::this.onMessageChange}>
              </textarea>

              <div>
                <label className="dropDownLabel">Link</label>
              </div>

              <input  className="form-input form-control"
                      type="text"
                      placeholder="Enter URL"
                      value={urlLink}
                      onChange={::this.onUrlLinkChange}
              >
              </input>

            <DropdownMenu label="Group"
                          options={groups}
                          selectedOption={group}
                          onChangeHandler={::this.onGroupChange}/>

            <DropdownMenu label="Category"
                          options={categories}
                          selectedOption={category}
                          onChangeHandler={::this.onCategoryChange}/>



            <div className="clearfix">
                <ActionButton name={this.state.actionButtonName}
                              status={this.state.actionButtonStatus}
                              onClickHandler={::this.sendNotification}
                              onActionButtonStateChange={::this.onActionButtonStateChange}
                />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
