import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';

import styles from './card.scss';

export default class Card extends Component {
  componentDidUpdate() {
    forceCheck();
  }

  render() {
    const {
      item,
      openOverlay,
    } = this.props;

    return (
      <a href="#" className={styles.container} onClick={() => openOverlay(item)}>
        <LazyLoad height={250} offset={50} once>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={`https://juweez.co.uk/${item.photos[0]}`} alt={item.title} />
          </div>
        </LazyLoad>
      </a>
    );
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
