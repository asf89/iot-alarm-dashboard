import React from 'react';
import { Header, CardContainer, SimpleCard } from 'components';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const text = 'Project IoT';
  return (
    <div className={styles.container}>
      <Header title={text} />
      <div className={styles.temp}>
        <div className={styles.info}>
          <CardContainer title="Temperature" />
          <SimpleCard content="1956 °C" />
        </div>
        <div className={styles.info}>
          <CardContainer title="Reference" />
          <SimpleCard content="50 °C" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
