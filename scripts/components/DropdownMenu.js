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