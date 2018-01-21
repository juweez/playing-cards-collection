import React from 'react';
import PropTypes from 'prop-types';

import styles from './counter.module.scss';

export default function Counter({ count }) {
  return (
    <div className={styles.container}>
      {count}
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
