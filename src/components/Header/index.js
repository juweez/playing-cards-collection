import React from 'react';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <svg className={styles.icon} viewBox="0 0 50 37" width="50" height="37">
          {/* eslint-disable max-len */}
          <path d="M29.258 27.132L19.838.665A.999.999 0 0 0 18.56.058L.915 6.338a.999.999 0 0 0-.607 1.278l9.421 26.466a.999.999 0 0 0 1.277.607l17.643-6.28a1 1 0 0 0 .609-1.277zM11.279 32.47L2.529 7.887l15.76-5.61 8.75 24.583-15.76 5.61z" />
          <path d="M49.123 8.593l-17.669-6.21a1 1 0 0 0-1.276.612l-3.289 9.364a1 1 0 1 0 1.886.663l2.958-8.421 15.781 5.547-8.65 24.618-10.44-3.668a.996.996 0 0 0-1.274.612.998.998 0 0 0 .612 1.274l11.384 4a.998.998 0 0 0 1.274-.612l9.313-26.504a1 1 0 0 0-.61-1.275z" />
          {/* eslint-enable max-len */}
        </svg>
        <h1 className={styles.heading}>Playing cards collection</h1>
        <p className={styles.subheading}>By Juweez</p>
      </div>
    </div>
  );
}
