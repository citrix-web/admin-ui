import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logged-in">
        <span className="avatar">&nbsp;</span>
        <a href="#">{this.props.name} <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      </div>
    )
  }
}