import React from 'react';
import PropTypes from 'prop-types';

import styles from './search.scss';

export default function Search({ inputRef, searchCards }) {
  return (
    <div className={styles.group}>
      <label className={styles.label} htmlFor="search">Search</label>
      <input
        id="search"
        className={styles.input}
        ref={inputRef}
        onKeyUp={searchCards}
        placeholder="Search..."
      />
    </div>
  );
}

Search.propTypes = {
  inputRef: PropTypes.func.isRequired,
  searchCards: PropTypes.func.isRequired,
};
