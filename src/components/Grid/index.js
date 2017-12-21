import React from 'react';
import PropTypes from 'prop-types';

import styles from './grid.module.scss';

export default function Grid({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
