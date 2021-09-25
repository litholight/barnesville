import React from 'react';
import Date from './Date';
// import EventName from './EventName';
// import Time from './Time';

const Schedule = ({ event }) => {
  return (
    <div>
      {event.eventName}
      <Date schedule={event.schedule} />
    </div>
  );
};

export default Schedule;
