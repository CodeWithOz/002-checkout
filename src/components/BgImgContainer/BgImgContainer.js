import React from 'react';
import PropTypes from 'prop-types';
import styles from './BgImgContainer.module.css';

export default function BgImgContainer({ bgImgUrl, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImgUrl})`
      }}
      className={styles.BgImgContainer}
    >
      {children}
    </div>
  );
}

BgImgContainer.propTypes = {
  bgImgUrl: PropTypes.string.isRequired
};
