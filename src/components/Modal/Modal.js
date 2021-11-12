import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components';
import styles from './Modal.module.css';

const Modal = (props) => {
  const { children, visible, size } = props;
  const visibleClass = visible ? styles.show : styles.hide;

  return (
  <div className={`${styles.container} ${visibleClass}`}>
    <Card className={`${styles.modal} ${visibleClass} ${styles[size] ?? ''}`}>
      {visible && children}
    </Card>
  </div>
  );
};

Modal.defaultProps = {
  children: null,
  visible: false,
  size: '',
};

Modal.propTypes = {
  children: PropTypes.element,
  visible: PropTypes.bool,
  size: PropTypes.string,
};

export default Modal;
