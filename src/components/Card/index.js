import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.scss';

export default function Card({ item, openOverlay }) {
  return (
    <div className={styles.container} onClick={() => openOverlay(item)}>
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
