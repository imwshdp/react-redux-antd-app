import React, { FC, useEffect } from 'react';
import Layout from 'antd/es/layout';

import IUser from 'models/IUser';
import useActions from 'hooks/useActions';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

import './App.css';

const App: FC = () => {

  // getting binded action-creators
  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    // if user logged - relogin user after page reload
    if(localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') } as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
