import React from 'react';
import { string } from 'prop-types';

export default function ProductDisplay({ bgImgUrl }) {
  return (
    <div style={{ backgroundImage: `url(${bgImgUrl})` }}>ProductDisplay</div>
  );
}

ProductDisplay.propTypes = {
  bgImgUrl: string
};
