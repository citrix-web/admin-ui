import React, {Component} from 'react';
import DropDown from './DropDown';
import ActionButton from './ActionButton';
import {bindAll} from 'lodash';
import '../../sass/index.scss';

export default class AdminCenterForm extends Component {

	constructor(props) {
    	super(props);
  		this.handleMessageChanged = this.handleMessageChanged.bind(this);
    	this.sendMessage = this.sendMessage.bind(this);
    	bindAll(this, [
  			'handleGroupChange',
  			'handleCategoryChange',
  			'handleMessageChanged',
  			'sendMessage'
  		]);
  	};

	sendMessage(e) {
  		e.preventDefault();
  		this.setState({message: ""});

  		// << to be replaced by the redux code >>
  	};

  	handleGroupChange(selectedGroup) {
  		this.setState({selectedGroup});
  	};

  	handleCategoryChange(selectedCategory) {
  		this.setState({selectedCategory});
  	};

  	handleMessageChanged(e) {
  		this.setState({message: e.target.value});
  	}

  	loadGroups() {

  		// << to be replaced by the actual redux call >>
  		return [{"name": "HR Group","description": " This is a HR group."},
  				{"name": "IT Group","description": " This is a IT group."}];
  	};

  	loadCategories() {

  		// << to be replaced by the actual redux call >>
  		return [{"name":"Warning"}, {"name":"Information"}, {"name":"Positive"}];
  	};

  	componentWillMount() {
  		this.setState({groups: {options: this.loadGroups()}, categories: {options: this.loadCategories()}});
  	};

	render() {
		return (
         <div className="admin-center">
            <div className="logged-in">
               <span className="avatar">&nbsp;</span>
               <a href="#">Tim Lange <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>
            <div>
      			<div className="messageFormContainer admin-form box">
      				<h3 className="sendMessageTitle">Send Notification</h3>
      				<form className="createMessageForm form-group" onSubmit={this.sendMessage}>
      		    		<textarea
      		    			placeholder="Please enter your message here."
      		    			className="messageInput form-control"
      		    			onChange={this.handleMessageChanged}
      		    			value={this.state.message}
      		    		/>
						<DropDown name="Group" data={this.state.groups} changeHandler={this.handleGroupChange.bind(this)} />
						<DropDown name="Category" data={this.state.categories} changeHandler={this.handleCategoryChange.bind(this)}/>
						<div className="clearfix">
							<ActionButton/>
						</div>
      				</form>
      			</div>
            </div>
         </div>
		);
	};
}
