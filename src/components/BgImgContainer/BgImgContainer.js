import React from 'react';
import styles from './BgImgContainer.module.css';

export default function BgImgContainer({ bgImgUrl, children }) {
  return <div className={styles.root}>{children}</div>;
}
