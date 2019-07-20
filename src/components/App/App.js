import React from 'react';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

import './App.css';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.root}>
      <BgImgContainer>
        <div className={styles.content}>
          <ProductDisplay />
          <Payment />
        </div>
      </BgImgContainer>
    </div>
  );
}
