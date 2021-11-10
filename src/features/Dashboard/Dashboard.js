import React from 'react';
import { Header, CardContainer, SimpleCard } from 'components';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const text = 'Project IoT';
  return (
    <div className={styles.container}>
      <Header title={text} />
      <CardContainer title="Temperature" />
      <SimpleCard content="1956 °C" />
    </div>
  );
};

export default Dashboard;
