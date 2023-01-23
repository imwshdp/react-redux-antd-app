import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';

import useActions from 'hooks/useActions';
import useTypedSelector from 'hooks/useTypedSelector';

import IEvent from 'models/IEvent';

import EventCalendar from 'components/EventCalendar';
import EventForm from 'components/EventForm';

const Event: FC = () => {

  // modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // getting binded action-creators
  const { fetchGuests, createEvent, fetchEvents } = useActions()

  // get states from store
  const {guests, events} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  // callback (adding new event note)
  const addNewEvent = (event: IEvent) => {
    createEvent(event)
    setIsModalOpen(false)
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
    
      <EventCalendar
        events={events}
      />
      
      <Row justify='center'>
        <Button
          onClick={() => setIsModalOpen(true)}
        >
          Добавить событие
        </Button>
      </Row>

      <Modal
        title="Добавить событие"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <EventForm
          guests={guests}
          submit={(event) => addNewEvent(event)}
        />
      </Modal>

    </Layout>
  );
}

export default Event;