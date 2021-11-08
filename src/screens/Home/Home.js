import React from 'react';
import { Dashboard } from 'features';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Dashboard />
    </div>
  );
};

export default Home;
