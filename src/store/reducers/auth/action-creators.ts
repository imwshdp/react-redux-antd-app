import { AppDispatch } from 'store/index';

import { AuthActionsEnum, setAuthAction, setUserAction, setIsLoadingAction, setErrorAction } from './types';
import IUser from 'models/IUser';

import UserService from 'api/UserService';

const AuthActionCreators = {
  setIsAuth: (auth: boolean): setAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setUser: (user: IUser): setUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsLoading: (payload: boolean): setIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
  setError: (error: string): setErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),

  // ASYNC ACTION CREATORS

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {

    try {

      // dispatching loading state
      dispatch(AuthActionCreators.setIsLoading(true));

      setTimeout(async () => {
        // data parcing
        const response = await UserService.getUsers()
        const mockUser = response.data.find(user => user.username === username && user.password === password);

        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          // dispatching authorization and user data
          dispatch(AuthActionCreators.setUser(mockUser))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          // input data dispatching error
          dispatch(AuthActionCreators.setError('Введен некорректный логин или пароль'));
        }

        // dispatching loading state
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1000)

    } catch (e) {
      // dispatching errors
      dispatch(AuthActionCreators.setError('Произошла ошибка при входе'));
    }

  },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')

    dispatch(AuthActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}

export default AuthActionCreators;