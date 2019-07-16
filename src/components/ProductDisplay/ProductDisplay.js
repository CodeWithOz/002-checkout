import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

const productDisplayConfig = {
  listingTitle: 'Coworking Space, South Korea',
  numPeople: '1 person',
  listingDates: {
    start: 'Mon, Aug 22, 2016',
    end: 'Fri, Aug 26, 2016'
  }
};

export function ProductDisplay({ bgImgUrl, price }) {
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
          {price} GBP <span>/ 1 day</span>
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
  bgImgUrl: string,
  price: number
};

const mapStateToProps = ({ price }) => ({ price });

export default connect(mapStateToProps)(ProductDisplay);
