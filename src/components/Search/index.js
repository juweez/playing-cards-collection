import React from 'react';
import PropTypes from 'prop-types';

import Counter from '../Counter';

import styles from './search.module.scss';

export default function Search({ inputRef, searchCards, count }) {
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
      <Counter count={count} />
    </div>
  );
}

Search.propTypes = {
  inputRef: PropTypes.func.isRequired,
  searchCards: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
