import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'router';

import { Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Menu from 'antd/es/menu';

import useTypedSelector from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';

const Navbar: FC = () => {

  const navigate = useNavigate()

  // getting store states
  const {isAuth, user} = useTypedSelector(state => state.auth)

  // getting binded action-creators
  const {logout} = useActions()

  const privateMenuItems = [
    {
      key: 1,
      onClick: () => navigate(RouteNames.EVENT),
      label: 'Календарь событий'
    },
    {
      key: 2,
      onClick: () => navigate(RouteNames.ACCOUNTS),
      label: 'Учетные записи'
    },
    {
      key: 3,
      onClick: () => logout(),
      label: 'Выйти'
    },
  ]

  const publicMenuItems = [
    {
      key: 1,
      onClick: () => navigate(RouteNames.LOGIN),
      label: 'Вход'
    },
  ]

  return (
    <Header>
      <Row justify='end'>
        {isAuth ?
          <>
            <div style={{color: 'white', marginRight: '20px'}}>С возвращением, {user.username}!</div>
            <Menu theme="dark" mode="horizontal" selectable={false} items={privateMenuItems} />
          </>
        :
          <Menu theme="dark" mode="horizontal" selectable={false} items={publicMenuItems} />
        }
      </Row>
    </Header>
  );
}

export default Navbar;