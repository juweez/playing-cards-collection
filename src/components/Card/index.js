import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntersectionObserver from '../../utils/intersectionObserver';
import placeholder from './placeholder.jpg';
import styles from './card.module.scss';

export default class Card extends Component {
  // Preload image
  static fetchImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  constructor(props) {
    super(props);

    this.becameVisible = this.becameVisible.bind(this);
    this.applyImage = this.applyImage.bind(this);
  }

  componentDidMount() {
    if (IntersectionObserver.isSupported) {
      IntersectionObserver.observe(this.image, this.becameVisible);
    } else {
      this.becameVisible();
    }
  }

  applyImage(src) {
    this.image.src = src;
  }

  becameVisible() {
    const { src } = this.image.dataset;

    return this.constructor.fetchImage(src).then(() => {
      this.applyImage(src);
    });
  }

  render() {
    const {
      item,
      openOverlay,
    } = this.props;

    return (
      <a
        href="#card-overlay"
        className={styles.container}
        onClick={evt => openOverlay(evt, item)}
      >
        <div className={styles.imgContainer}>
          <img
            ref={(el) => { this.image = el; }}
            className={styles.img}
            src={placeholder}
            data-src={`https://juweez.co.uk/${item.image_url}`}
            alt={item.title}
          />
        </div>
      </a>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  openOverlay: PropTypes.func.isRequired,
};
