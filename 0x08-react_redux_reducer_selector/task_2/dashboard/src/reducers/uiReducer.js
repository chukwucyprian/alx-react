import { Map } from 'immutable';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('isUserLoggedIn', true);
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
};

export default uiReducer;