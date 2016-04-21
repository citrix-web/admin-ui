import React, {Component} from 'react';
import '../../sass/index.scss';
import {bindAll} from 'lodash';

export default class ActionButton extends Component {

  constructor(props) {
    var linkClassName = '';
    var iClassName = '';

    super(props);
    bindAll(this, [
      'setToNormalState'
    ]);
  };

  setToNormalState() {
    if(this.props.status === 'success' 
      || this.props.status === 'failure'
      || this.props.status === 'inProgress') {
      this.setState({
          linkClassName: 'btn-primary',
          iClassName: 'fa-share'
        });
    }
  };

  handleClick() {
    this.props.onClickHandler();
  };

  render() {
    var _iClassName = '', _linkClassName = '', updateRequired = true;
    if (this.props.status === 'success') { // success
        _linkClassName = 'btn-success';
        _iClassName = 'fa-check';
    } else if (this.props.status === 'failure') { // failure
        _linkClassName = 'btn-warning';
        _iClassName = 'fa-warning';
    } else if (this.props.status === 'inProgress') { // action in progress
        _linkClassName = 'btn-disabled';
        _iClassName = '';
    } else { // normal
        _linkClassName = 'btn-primary';
        _iClassName = 'fa-share';
        updateRequired = false;
    }
    this.linkClassName = _linkClassName;
    this.iClassName = _iClassName;
    if(updateRequired) {
      setTimeout(this.props.onActionButtonStateChange, 2000);
    }
    return (
      <span onClick={this.handleClick.bind(this)}>
        <a className={"btn btn-lg " + this.linkClassName + " pull-right"} href="#" role="button">
        <i className={"fa " + this.iClassName} aria-hidden="true"></i>{this.props.name}</a>
      </span>
    );
  };
}
