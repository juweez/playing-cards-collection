import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './overlay.scss';

export default function Overlay({ open, closeOverlay, item }) {
  const classes = classNames({
    [styles.container]: true,
    [styles.open]: open,
  });
  return (
    <div className={classes}>
      <div className={styles.background}>
        <div className={styles.body}>
          {item && (
            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={`https://juweez.co.uk/${item.image_url}`} alt={item.title} />
              </div>
              <div className={styles.details}>
                <h2 className={styles.title}>{item.title}</h2>
                <p><span className={styles['property-title']}>Brand</span> {item.brand}</p>
                <p><span className={styles['property-title']}>Manufacturer</span> {item.manufacturer.label || '-'}</p>
                {item.date_of_issue && (
                  <p><span className={styles['property-title']}>Release date</span> {item.date_of_issue}</p>
                )}
                {item.date_of_purchase && (
                  <p><span className={styles['property-title']}>Purchase date</span> {item.date_of_purchase}</p>
                )}
                {item.copies && (
                  <p><span className={styles['property-title']}>Copies</span> {item.copies}</p>
                )}
                {item.condition && (
                  <p><span className={styles['property-title']}>Condition</span> {item.condition}</p>
                )}
                {item.print_edition && (
                  <p><span className={styles['property-title']}>Print edition</span> {item.print_edition}</p>
                )}
                {item.print_run && (
                  <p><span className={styles['property-title']}>Print run</span> {item.print_run}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <span
        className={styles.close}
        onClick={closeOverlay}
        onKeyPress={closeOverlay}
        role="button"
        tabIndex="0"
      >
      X
      </span>
    </div>
  );
}

Overlay.propTypes = {
  open: PropTypes.bool.isRequired,
  closeOverlay: PropTypes.func.isRequired,
  item: PropTypes.shape,
};

Overlay.defaultProps = {
  item: '',
};
