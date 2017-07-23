import React from 'react';
import styles from './styles.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Playing cards collection
        <br />
        <span className={styles.subheading}>By Juweez</span>
      </h1>
    </div>
  );
}
