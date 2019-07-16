import React from 'react';
import { BgImgContainer, ProductDisplay, Payment } from '../../components';

const appConfig = {
  bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg'
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
