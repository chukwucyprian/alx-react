import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });
});