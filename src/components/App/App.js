import React from 'react';
import { BgImgContainer, ProductDisplay, Slider } from '../../components';

const appConfig = {
  bgImgUrl: 'https://source.unsplash.com/1600x900/?office,room'
};

export default function App() {
  return (
    <div>
      <BgImgContainer bgImgUrl={appConfig.bgImgUrl}>
        <ProductDisplay />
      </BgImgContainer>
      <Slider />
    </div>
  );
}
