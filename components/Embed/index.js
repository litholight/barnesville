import React from 'react';
import Schedule from '../Schedule';
import GetTicket from '../GetTicket';
import Events from '../Events';

import styles from './Embed.module.css';

const Embed = ({ arbiterData }) => {
  return (
    <>
      <div className={styles.name}>
        <h2>{arbiterData.name}</h2>
      </div>
      <Events events={arbiterData.events} />
      <hr />
    </>
  );
};

export default Embed;
