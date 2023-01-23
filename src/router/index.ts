import Login from "pages/Login";
import Event from 'pages/Event'
import Accounts from "pages/Accounts";

export interface IRoute {
  path: string;
  exact?: boolean;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
  ACCOUNTS = '/accounts',
  REDIRECT = '*',
}

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, element: Event },
  { path: RouteNames.ACCOUNTS, exact: true, element: Accounts },
  { path: RouteNames.REDIRECT, exact: false, element: Event },
]

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, element: Login },
  { path: RouteNames.REDIRECT, exact: false, element: Login },
]