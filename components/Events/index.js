import React from 'react';
import Schedule from '../Schedule';
import GetTicket from '../GetTicket';

const Events = ({ events }) => {
  return (
    <div>
      {events.map((ev) => (
        <div key={ev.id}>
          <Schedule event={ev} />
          <GetTicket event={ev.id} />
        </div>
      ))}
    </div>
  );
};

export default Events;
