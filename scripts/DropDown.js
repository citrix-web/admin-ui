import React, {Component} from 'react';

export default class DropDown extends Component {

	constructor(props) {
    super(props);
    this.state = {};
    this.state.options = this.props.data.options;
    this.state.name = props.data.name;
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.props.changeHandler(e.target.value);
  }

  render() {
    var i = 0;
    var options = this.state.options.map(function (option) {
        return React.createElement(
          'option',
          {value: option.name, key: i++},
          option.name
        );
    });

    return React.createElement("div", {className: "dropDownContainer"},
        React.createElement(
          'label',
          {className: "dropDownLabel"},
          this.props.name
        ),
        React.createElement(
          'select',
          {onChange: this.handleChange, className: "dropDown form-control"},
          options
        )
    );
  };
}
