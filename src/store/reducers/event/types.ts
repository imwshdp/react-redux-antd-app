import IEvent from 'models/IEvent';
import IUser from 'models/IUser';

// STATE
export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

// ENUM OF ACTIONS TYPES
export enum EventActionsEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

// ACTIONS
export interface setGuestsAction {
  type: EventActionsEnum.SET_GUESTS;
  payload: IUser[];
}

export interface setEventsAction {
  type: EventActionsEnum.SET_EVENTS;
  payload: IEvent[];
}

// TYPES FOR EXPORT
export type EventAction =
  setGuestsAction |
  setEventsAction;