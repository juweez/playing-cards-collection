import React from 'react';
import PropTypes from 'prop-types';

import styles from './search.scss';

export default function Search({ inputRef, searchCards }) {
  return (
    <div className={styles.group}>
      <label className={styles.label}>Search</label>
      <input
        className={styles.input}
        ref={inputRef}
        onKeyUp={searchCards}
        placeholder="Search..."
      />
    </div>
  );
}

Search.propTypes = {
  inputRef: PropTypes.func,
  searchCards: PropTypes.func,
};
