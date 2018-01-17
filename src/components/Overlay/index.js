import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './overlay.module.scss';

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
                <img className={styles.img} src={item.image.resolutions.src} alt={item.title} />
              </div>
              <div className={styles.details}>
                <h2 className={styles.title}>{item.title}</h2>
                <p><span className={styles['property-title']}>Brand</span> {item.brand}</p>
                {item.manufacturer !== 'null' && (
                  <p><span className={styles['property-title']}>Manufacturer</span> {item.manufacturer}</p>
                )}
                {item.yearOfRelease !== 'null' && (
                  <p><span className={styles['property-title']}>Release date</span> {item.yearOfRelease}</p>
                )}
                {item.yearOfPurchase !== 'null' && (
                  <p><span className={styles['property-title']}>Purchase date</span> {item.yearOfPurchase}</p>
                )}
                {item.numberOfCopies !== 'null' && (
                  <p><span className={styles['property-title']}>Copies</span> {item.numberOfCopies}</p>
                )}
                {item.printEditionRun !== 'null' && (
                  <p><span className={styles['property-title']}>Print edition/run</span> {item.printEditionRun}</p>
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
  item: PropTypes.object,
};

Overlay.defaultProps = {
  item: null,
};
