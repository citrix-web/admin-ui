import { combineReducers } from 'redux'
import * as editActions from '../constants/EditActions';
import * as submitStatus from '../constants/SubmitStatus';

function AdminFormReducer(state = {
  msg: '',
  group: 0,
  category: 0,
  status: submitStatus.READY
}, action) {
  switch (action.type) {
    case editActions.TYPE_MESSAGE:
      return Object.assign({}, state, {
        msg: action.msg
      });
    case editActions.SELECT_GROUP:
      return Object.assign({}, state, {
        msg: action.group
      });
    case editActions.SELECT_CATEGORY:
      return Object.assign({}, state, {
        msg: action.category
      });
    default:
      return state
  }
}

// We don't have multiple reducers yet. But, anyways!
const rootReducer = combineReducers({
  AdminFormReducer
});

export default rootReducer