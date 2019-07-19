import React from 'react';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

import './App.css';

export default function App() {
  return (
    <div>
      <BgImgContainer>
        <ProductDisplay />
        <Payment />
      </BgImgContainer>
    </div>
  );
}
