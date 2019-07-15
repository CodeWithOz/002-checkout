import React from 'react';
import { BgImgContainer, ProductDisplay, Slider } from '../../components';

const appConfig = {
  bgImgUrl: 'https://source.unsplash.com/1600x900/?office,room',
  slider: {
    initialValues: {
      range: '50'
    }
  }
};

export default function App() {
  const { bgImgUrl, slider } = appConfig;

  return (
    <div>
      <BgImgContainer bgImgUrl={bgImgUrl}>
        <ProductDisplay bgImgUrl={bgImgUrl} />
      </BgImgContainer>
      <Slider {...slider} />
    </div>
  );
}
