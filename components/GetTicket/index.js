import React from 'react';
import NextLink from 'next/link';
import styles from './GetTicket.module.css';

const GetTicket = ({ event }) => {
  return (
    <>
      <div className={styles.container}>
        {/* {JSON.stringify(event.id)} */}
        <button className={styles.button}>
          <NextLink href={`/event/${event}`}>
            <h3>GET TICKETS</h3>
          </NextLink>
          {/* <h3>{JSON.stringify(event)}</h3> */}
        </button>
      </div>
    </>
  );
};

export default GetTicket;
