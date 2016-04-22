import React, { Component } from 'react';
import { render } from 'react-dom';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropDownContainer">
        <label className="dropDownLabel">{this.props.label}</label>
        <div className="addNew">
          <span className="addNewText">
            Add
          </span>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <select className="dropDown form-control" name="Category" onChange={this.props.onChangeHandler}>
          {this.props.options.map(c =>
            <option name={c} value={c} selected={this.props.selectedOption === c}>
              {c}
            </option>
          )}
        </select>
      </div>
    )
  }
}