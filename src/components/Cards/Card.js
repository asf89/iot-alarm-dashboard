import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const SimpleCard = (props) => {
  const { children, className } = props;
  const cardClass = `${styles.card} ${styles.content} ${className}`;

  return <div className={cardClass}>{children}</div>;
};

SimpleCard.defaultProps = {
  children: null,
  variant: '',
};

SimpleCard.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default SimpleCard;
