import { AppDispatch } from 'store';

import { EventActionsEnum, setEventsAction, setGuestsAction } from './types';
import IEvent from 'models/IEvent';
import IUser from 'models/IUser';

import UserService from 'api/UserService';

const EventActionCreators = {
  setGuests: (payload: IUser[]): setGuestsAction => ({ type: EventActionsEnum.SET_GUESTS, payload: payload }),
  setEvents: (payload: IEvent[]): setEventsAction => ({ type: EventActionsEnum.SET_EVENTS, payload: payload }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {

      // data parcing
      const response = await UserService.getUsers()
      // dispatching guests data
      dispatch(EventActionCreators.setGuests(response.data))

    } catch (e) {
      console.log(e)
    }
  },

  createEvent: (payload: IEvent) => async (dispatch: AppDispatch) => {
    try {

      // add new note to array of notes from local storage
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[];
      json.push(payload);

      // dispatch new array state setting
      dispatch(EventActionCreators.setEvents(json))

      // rewrite local storage
      localStorage.setItem('events', JSON.stringify(json))

    } catch (e) {
      console.log(e)
    }
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {

      // filter event notes from local storage
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(ev =>
        ev.author === username ||
        ev.guest === username
      )

      // dispatching user's event notes
      dispatch(EventActionCreators.setEvents(currentUserEvents))

    } catch (e) {
      console.log(e)
    }
  },
}

export default EventActionCreators;