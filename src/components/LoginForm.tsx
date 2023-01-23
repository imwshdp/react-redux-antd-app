import React, { FC, useState } from 'react';
import { Input, Form, Button } from 'antd';

import rules from 'utils/rules';
import useTypedSelector from 'hooks/useTypedSelector';
import useActions from 'hooks/useActions';

const LoginForm: FC = () => {

  // states of managed inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // error and loading state
  const {error, isLoading} = useTypedSelector(state => state.auth)

  // getting binded action-creators
  const {login} = useActions()

  // dispatching login action
  const submit = () => {
    login(username, password)
  }

  return (
    <Form
      onFinish={submit}
    >

      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя')]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="User"
        />
      </Form.Item>
      
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль')]}
      >
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="123"
        />
      </Form.Item>

      {error &&
        <div style={{color: 'red', marginBottom: '20px'}}>
          {error}
        </div>
      }

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Войти
        </Button>
      </Form.Item>

    </Form>
  );
}

export default LoginForm;