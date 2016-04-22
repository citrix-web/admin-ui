import fetch from 'isomorphic-fetch';
import superagent from 'superagent';
/**
 * Publish a notification
 */
export function notifSend(notif) {
  console.log('notif', notif)
  return dispatch => {
    superagent.put('http://localhost:3000/queue')
      .send({ message: notif.message, group: notif.group, category: notif.category })
      .end((err,response) => {
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
  };
}
