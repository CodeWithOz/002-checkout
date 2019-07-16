import React from 'react';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

const appConfig = {
  bgImgUrl: 'https://source.unsplash.com/1600x900/?office,room'
};

export default function App() {
  const { bgImgUrl } = appConfig;

  return (
    <div>
      <BgImgContainer bgImgUrl={bgImgUrl}>
        <ProductDisplay bgImgUrl={bgImgUrl} />
        <Payment />
      </BgImgContainer>
    </div>
  );
}
