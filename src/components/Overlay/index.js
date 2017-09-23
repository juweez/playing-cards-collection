import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './overlay.scss';

export default function Overlay({ open, closeOverlay, item }) {
  const classes = classNames({
    [styles.container]: true,
    [styles.open] : open,
  });
  return (
    <div className={classes}>
      <div className={styles.background}>
        <div className={styles.body}>
          {item && (
              <div className={styles.content}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={`http://juweez.co.uk/${item.photos[0]}`} alt={item.title} />
                </div>
                <div className={styles.details}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p><span className={styles['property-title']}>Brand</span> {item.brand}</p>
                  <p><span className={styles['property-title']}>Manufacturer</span> {item.manufacturer.label || '-'}</p>
                  <p><span className={styles['property-title']}>Release date</span> {item.date_of_issue || '-'}</p>
                  <p><span className={styles['property-title']}>Purchase date</span> {item.date_of_purchase || '-'}</p>
                  <p><span className={styles['property-title']}>Condition</span> {item.condition.label || '-'}</p>
                  <p><span className={styles['property-title']}>Print run</span> {item.print_run || '-'}</p>
                </div>
              </div>
          )}
        </div>
      </div>
      <span className={styles.close} onClick={closeOverlay}>X</span>
    </div>
  );
}

Overlay.propTypes = {
  open: PropTypes.bool.isRequired,
};
