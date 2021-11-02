import React from 'react';
import { Background, Header } from 'components';

const Dashboard = () => {
  const text = 'Project IoT';
  return (
    <Background>
      <Header title={text} />
    </Background>
  );
};

export default Dashboard;
