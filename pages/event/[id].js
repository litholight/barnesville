import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { arbiterData } from '../../arbiterData';
import styles from './EventId.module.css';

const EventId = () => {
  const [eid, setEid] = useState();
  const [eventData, setEventData] = useState();
  const [ticketPrice, setTicketPrice] = useState(4);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
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
    <div className={styles.container}>
      <div className={styles.eventName}>
        <h1>{eventData && eventData.eventName}</h1>
      </div>
      <div className={styles.eventSchedule}>
        <h3>{eventData && eventData.schedule}</h3>
      </div>
      <div>${ticketPrice} per ticket</div>
    </div>
  );
};

export default EventId;
