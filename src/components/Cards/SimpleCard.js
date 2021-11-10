import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimpleCard.module.css';

const SimpleCard = (props) => {
  const { content } = props;
  return (
    <div className={styles.card}>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

SimpleCard.defaultProps = {
  content: '',
};

SimpleCard.propTypes = {
  content: PropTypes.string,
};

export default SimpleCard;
