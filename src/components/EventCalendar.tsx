import React, { FC } from 'react';
import { Dayjs } from 'dayjs';
import { Badge, Calendar } from 'antd';

import stringifyDate from 'utils/stringifyDate';
import IEvent from 'models/IEvent';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {

  const dateCellRender = (value: Dayjs) => {
    
    // filter event notes array 
    const currentDate = stringifyDate(value)
    const currentDayEvents = events.filter(ev => ev.date === currentDate)

    // render event notes
    return (
      <ul>
        {currentDayEvents.map((ev, index) =>
          <li key={index}>
            <Badge status={'success'} text={ev.description} />
          </li>
        )}
      </ul>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
}

export default EventCalendar;