import React from 'react';
import { Background, Header } from 'components';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const text = 'Project IoT';
  return (
    <div className={styles.container}>
      <Background>
        <Header title={text} />
      </Background>
    </div>
  );
};

export default Dashboard;
