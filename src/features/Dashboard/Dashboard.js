import React from 'react';
import { Header } from 'components';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const text = 'Project IoT';
  return (
    <div className={styles.container}>
      <Header title={text} />
    </div>
  );
};

export default Dashboard;
