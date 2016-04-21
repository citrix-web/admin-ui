import { NOTIF_SEND } from '../constants/AdminFormConstants';

export default function notifs(prevState = [], action) {
  if (!action || !action.type) {
    return prevState;
  }

  switch (action.type) {
    case NOTIF_SEND:
      return [action.payload, ...prevState];
    default:
      return prevState;
  }
}
