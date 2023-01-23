import IUser from 'models/IUser';

// STATE
export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

// ENUM OF ACTIONS TYPES
export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

// ACTIONS
export interface setAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface setUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export interface setIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface setErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}

// TYPES FOR EXPORT
export type AuthAction =
  setAuthAction |
  setUserAction |
  setIsLoadingAction |
  setErrorAction;