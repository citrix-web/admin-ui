import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {sendNotificationSubmit} from '../actions/AdminFormActions';
import AdminCenterForm from '../components/AdminCenterForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AdminCenterForm />
    )
  }
}


export default connect(mapStateToProps)(App)
