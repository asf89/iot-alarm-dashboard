import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const ButtonComponent = (props) => {
  const { style, text, variant, action } = props;
  const buttonClass = `${styles.button} ${styles[variant]}`;
  return (
    <div className={buttonClass}>
      <Button style={style} onClick={action}>
        {text}
      </Button>
    </div>
  );
};

ButtonComponent.defaultProps = {
  style: undefined,
  text: '',
  variant: 'light',
  action: () => undefined,
};

ButtonComponent.propTypes = {
  style: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  text: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
  action: PropTypes.func,
};

export default ButtonComponent;
