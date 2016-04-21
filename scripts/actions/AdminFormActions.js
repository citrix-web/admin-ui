import fetch from 'isomorphic-fetch';

/**
 * Publish a notification
 */
export function notifSend(notif) {
  return dispatch => {
    fetch(' http://localhost:3000/queue', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: notif.msg,
        group: notif.group,
        category: notif.category
      })
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          //dispatch(sendSuccess(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          //dispatch(sendFailure(error));
          throw error;
        }
      })
      .catch(error => {
        console.log('request failed', error);
      });
  };
}