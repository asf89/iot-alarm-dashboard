import React, { useEffect, useState } from 'react';
import { Header, CardContainer, Card, Modal, Button } from 'components';
import { FirebaseService } from 'services';
import styles from './Dashboard.module.css';

const text = 'Project IoT';
const tempRef = 40;

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [tempMsd, setTempMsd] = useState(25);

  useEffect(() => {
    FirebaseService.getCount('count', (tempMsd) => setTempMsd(tempMsd));
  });

  useEffect(() => {
    tempMsd >= tempRef ? setModal(true) : setModal(false);
  }, [tempMsd]);

  return (
    <div className={styles.container}>
      <Header title={text} />
      <Modal visible={modal} size="large">
        {'House on fire.'}
        <br />
        {'Activating fire control system...'}
        <Button
          text="OK"
          style={{ fontWeight: 'bold' }}
          action={() => setModal(false)}
        />
      </Modal>
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
    </div>
  );
};

export default Dashboard;
