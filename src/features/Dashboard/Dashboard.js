import React from 'react';
import { Header, CardContainer, Card, Modal, Button } from 'components';
import styles from './Dashboard.module.css';

const text = 'Project IoT';
const tempMsd = 25;
const tempRef = 50;

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header title={text} />
      {tempMsd >= tempRef ? (
        <Modal visible={true} size="large">
          {'House on fire.'}
          <br />
          {'Activating fire control system...'}
          <Button text="OK" style={{ fontWeight: 'bold' }} />
        </Modal>
      ) : (
        <div className={styles.temp}>
          <div className={styles.info}>
            <CardContainer title="Temperature" />
            <Card>{`${tempMsd} °C`}</Card>
          </div>
          <div className={styles.info}>
            <CardContainer title="Reference" />
            <Card>{`${tempRef} °C`}</Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
