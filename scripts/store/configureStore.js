import { Provider, connect } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as notifReducer } from 'admin-ui';

export default function configureStore() {
  // Store:
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
  )(createStore);

  const store = createStoreWithMiddleware(combineReducers({notifs: notifReducer}), {});

  return store;
}