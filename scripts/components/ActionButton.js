import React, {Component} from 'react';
import '../../sass/index.scss';
import {bindAll} from 'lodash';

export default class ActionButton extends Component {

  constructor(props) {
    super(props);
    bindAll(this, [
      'setToNormalState'
    ]);
  };

  componentWillMount() {
    if (this.props.status === 'success') { // success
      this.setState({
        linkClassName: 'btn-success',
        iClassName: 'fa-check'
      });
    } else if (this.props.status === 'failure') { // failure
      this.setState({
        linkClassName: 'btn-warning',
        iClassName: 'fa-warning'
      });
    } else if (this.props.status === 'inProgress') { // action in progress
      this.setState({
        linkClassName: 'btn-disabled',
        iClassName: ''
      });
    } else { // normal
      this.setState({
        linkClassName: 'btn-primary',
        iClassName: 'fa-share'
      });
    }
  };

  componentDidMount() {
    setTimeout(this.setToNormalState, 2000);
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
    this.props.clickHandler();
  };

  render() {
    return (
      <span onClick={this.handleClick.bind(this)}>
        <a className={"btn btn-lg " + this.state.linkClassName + " pull-right"} href="#" role="button">
        <i className={"fa " + this.state.iClassName} aria-hidden="true"></i>{this.props.name}</a>
      </span>
    );
  };
}
