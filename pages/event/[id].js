import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { arbiterData } from '../../arbiterData';

const EventId = () => {
  const [eid, setEid] = useState();
  const [eventData, setEventData] = useState();
  const router = useRouter();

  useEffect(() => {
    setEid(router.query.id);
    if (arbiterData) {
      const pageEvent = arbiterData.events.filter(
        (e) => e.id === router.query.id
      )[0];
      setEventData(pageEvent);
    }
  }, [arbiterData, router]);

  return (
    <div>
      {/* {eid} */}
      {eventData && eventData.eventName}
      {/* {JSON.stringify(eventData.eventName)} */}
    </div>
  );
};

export default EventId;
