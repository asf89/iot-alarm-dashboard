import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = (props) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: '',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
