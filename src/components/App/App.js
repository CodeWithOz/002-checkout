import React from 'react';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

import './App.css';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.root}>
      <BgImgContainer>
        <div className={styles.container}>
          <ProductDisplay rootClassName={styles.content} />
          <Payment rootClassName={styles.content} />
        </div>
      </BgImgContainer>
    </div>
  );
}
