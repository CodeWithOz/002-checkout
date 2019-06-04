import React from 'react';
import PropTypes from 'prop-types';

export default function BgImgContainer({ bgImgUrl, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        width: '800px',
        height: '800px'
      }}
    >
      {children}
    </div>
  );
}

BgImgContainer.propTypes = {
  bgImgUrl: PropTypes.string.isRequired
};
