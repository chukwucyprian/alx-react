import uiReducer from './uiReducer';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should handle LOGIN action correctly', () => {
    const action = { type: LOGIN };
    const newState = uiReducer(undefined, action).toJS();
    expect(newState.isUserLoggedIn).toEqual(true);
  });

  it('should handle LOGOUT action correctly', () => {
    const action = { type: LOGOUT };
    const newState = uiReducer(undefined, action).toJS();
    expect(newState.isUserLoggedIn).toEqual(false);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action correctly', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(undefined, action).toJS();
    expect(newState.isNotificationDrawerVisible).toEqual(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action correctly', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(undefined, action).toJS();
    expect(newState.isNotificationDrawerVisible).toEqual(false);
  });
  
});