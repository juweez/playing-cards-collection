import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default function Card({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={`http://juweez.co.uk/${item.photos[0]}`} alt={item.title} />
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
