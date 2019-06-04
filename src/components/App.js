import React from 'react';
import Slider from './Slider';
import BgImgContainer from './BgImgContainer';

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
