import React from 'react';
import { string } from 'prop-types';

const productDisplayConfig = {
  listingTitle: 'Coworking Space, South Korea',
  numPeople: '1 person',
  listingDates: {
    start: 'Mon, Aug 22, 2016',
    end: 'Fri, Aug 26, 2016'
  }
};

export default function ProductDisplay({ bgImgUrl }) {
  const {
    listingTitle,
    numPeople,
    listingDates: { start, end }
  } = productDisplayConfig;

  return (
    <div style={{ backgroundImage: `url(${bgImgUrl})` }}>
      <div>
        <h2>{listingTitle}</h2>
        <p>
          {1 /* price will go here */} GBP <span>/ 1 day</span>
        </p>
        <p>
          Entire office for <span>{numPeople}</span>
        </p>
        <p>
          <span>{start}</span> to <span>{end}</span>
        </p>
      </div>
    </div>
  );
}

ProductDisplay.propTypes = {
  bgImgUrl: string
};
