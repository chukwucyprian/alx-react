import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('Notification selectors', () => {
  it('filterTypeSelected selector', () => {
    const state = fromJS({
      filter: 'DEFAULT',
    });
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications selector', () => {
    const state = fromJS({
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'Notification 1',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'Notification 2',
        },
      ],
    });
    expect(getNotifications(state)).toEqual(
      fromJS([
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'Notification 1',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'Notification 2',
        },
      ])
    );
  });

  it('getUnreadNotifications selector', () => {
    const state = fromJS({
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'Notification 1',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'Notification 2',
        },
      ],
    });
    expect(getUnreadNotifications(state)).toEqual(
      fromJS([
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'Notification 1',
        },
      ])
    );
  });
});
