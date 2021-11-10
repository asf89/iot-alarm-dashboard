import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardContainer.module.css';

const CardContainer = (props) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      {title && (
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
      )}
    </div>
  );
};

CardContainer.defaultProps = {
  title: '',
};

CardContainer.propTypes = {
  title: PropTypes.string,
};

export default CardContainer;
