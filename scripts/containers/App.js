import React, { Component } from 'react'
import AdminCenterForm from '../components/AdminCenterForm';
import { connect } from 'react-redux';
import { actions as notifActions } from 'admin-ui';

const { notifSend } = notifActions;

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Connected Component:
export default connect(
  mapStateToProps,
  {notifSend}
)(AdminCenterForm);