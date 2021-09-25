import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Embed from '../components/Embed';
import styles from './Home.module.css';
import { arbiterData } from '../arbiterData';

export default function Home() {
  // const [arbiterData, setArbiterData] = useState();

  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <div className={styles.school}>
          <h1>BARNESVILLE SCHOOLS</h1>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.side}>Athletics</div>
        <div className={styles.rightmain}>
          <h1>Tickets</h1> */}
      <Embed arbiterData={arbiterData} />
      {/* </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.school}>
          <h1>BARNESVILLE SCHOOLS</h1>
        </div>
      </div> */}
    </div>
  );
}
