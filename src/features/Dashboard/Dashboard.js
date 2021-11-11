import React from 'react';
import { Header, CardContainer, SimpleCard } from 'components';
import styles from './Dashboard.module.css';

const text = 'Project IoT';
const tempMsd = 1956;
const tempRef = 50;

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header title={text} />
      <div className={styles.temp}>
        <div className={styles.info}>
          <CardContainer title="Temperature" />
          <SimpleCard>{`${tempMsd} °C`}</SimpleCard>
        </div>
        <div className={styles.info}>
          <CardContainer title="Reference" />
          <SimpleCard>{`${tempRef} °C`}</SimpleCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
