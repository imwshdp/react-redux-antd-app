import { Divider, Layout, List, Typography } from 'antd';
import React, { FC } from 'react';

const Accounts: FC = () => {

  const data = [
    'User',
    'Admin',
    'Tester',
    'Пароль от учетных записей: 123',
  ]

  return (
    <Layout>
      <Divider orientation="left"><h1>Учетные записи</h1></Divider>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </Layout>
  );
}

export default Accounts;