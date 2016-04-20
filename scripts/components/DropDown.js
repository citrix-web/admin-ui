import React, {Component} from 'react';

export default class DropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.props.changeHandler(e.target.value);
  }

  render() {
    var i = 0;
    var options = this.props.data.options.map(function (option) {
      return React.createElement(
        'option',
        {
          value: option.name,
          key: i++
        },
        option.name
      );
    });

    return React.createElement("div", {className: "dropDownContainer"},
      React.createElement(
        'label',
        {
          className: "dropDownLabel"
        },
        this.props.name
      ),
      React.createElement(
        'select',
        {
          onChange: this.handleChange,
          className: "dropDown form-control"
        },
        options
      )
    );
  };
}
