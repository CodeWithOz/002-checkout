import React from 'react';
import PropTypes from 'prop-types';

export default function BgImgContainer({ bgImgUrl, children }) {
  return <div style={{ backgroundImage: bgImgUrl }}>{children}</div>;
}

BgImgContainer.propTypes = {
  bgImgUrl: PropTypes.string.isRequired
};
