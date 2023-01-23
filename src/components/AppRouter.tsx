import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'router';

import useTypedSelector from 'hooks/useTypedSelector';

const AppRouter: FC = () => {

  const isAuth = useTypedSelector(state => state.auth.isAuth);

  return (
    <Routes>
      { isAuth ?
        privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
        :
        publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
      }
    </Routes>
  );
}

export default AppRouter;