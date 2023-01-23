import React, { FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';

import rules from 'utils/rules';
import stringifyDate from 'utils/stringifyDate';
import useTypedSelector from 'hooks/useTypedSelector';

import IUser from 'models/IUser';
import IEvent from 'models/IEvent';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {

  // new event note state
  const [event, setEvent] = useState<IEvent>({
    author: '',
    guest: '',
    date: '',
    description: ''
  } as IEvent)

  // function of date convertation
  const selectDate = (date: Dayjs | null) => {
    if(date) {
      setEvent({...event, date: stringifyDate(date)})
    }
  }

  // author state (logged user)
  const {user} = useTypedSelector(state => state.auth)

  // function of event note submit
  const submitForm = () => {
    // callback new event note
    props.submit({...event, author: user.username})
  }

  return (
    <Form
      onFinish={submitForm}
      initialValues={{ date: dayjs() }}
    >
      
      <Form.Item
        label="Описание"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={e => setEvent({...event, description: e.target.value})}
        />
      </Form.Item>

      <Form.Item
        label="Также уведомить"
        name="guest"
        rules={[rules.required()]}
      >
        <Select onChange={(guest: string) => setEvent({...event, guest})}>
          
          {props.guests.map(guest =>
            <Select.Option
              value={guest.username}
              key={guest.username}
            >
              {guest.username}
            </Select.Option>
          )}

        </Select>
      </Form.Item>

      <Form.Item
        label="Дата"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Некорректная дата для события')]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
          format={'YYYY/MM/DD'}
          placeholder={'Выберите дату'}
        />
      </Form.Item>

      <Form.Item>
        <Row justify='end'>
          <Button
            type="primary"
            htmlType="submit"
          >
            Добавить
          </Button>
        </Row>
      </Form.Item>

    </Form>
  );
}

export default EventForm;