import fetch from 'isomorphic-fetch'
import * as actionTypes from '../constants/ActionTypes';
import * as submitStatus from '../constants/SubmitStatus';

export const sendNotificationSubmit = (group, category) => {
  return {
    type: actionTypes.SEND_NOTIFICATION_SUBMIT,
    group,
    category,
    status: submitStatus.SUBMITTING
  };
};

export const sendNotificationSucceess = () => {
  return {
    type: actionTypes.SEND_NOTIFICATION_SUCCESS,
    status: submitStatus.SUCCESS
  };
};

export const sendNotificationFailure = () => {
  return {
    type: actionTypes.SEND_NOTIFICATION_FAILURE,
    status: submitStatus.FAILURE
  };
};

// TODO: Add actions for displaying send() success/failure messages.
export function sendNotification(data) {
  return dispatch => {
    dispatch(send(data));
    return fetch("/backend", {
      method: "POST",
      body: data  //just pass the data payload
    }).then((response) => {
      if (response.status >= 400) {
        console.log('Failed', response);
      }
      console.log('Success', response);
    })
  }
}