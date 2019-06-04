import React from 'react';
import { BgImgContainer, Slider } from '../../components';

const appConfig = {
  bgImgUrl: 'https://source.unsplash.com/900x900/?office'
};

export default function App() {
  return (
    <div>
      <BgImgContainer bgImgUrl={appConfig.bgImgUrl} />
      <Slider />
    </div>
  );
}
