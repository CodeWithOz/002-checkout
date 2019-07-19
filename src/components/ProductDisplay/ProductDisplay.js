import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

import styles from './ProductDisplay.module.css';

const productDisplayConfig = {
  listingTitle: 'Coworking Space, South Korea',
  numPeople: '1 person',
  listingDates: {
    start: 'Mon, Aug 22, 2016',
    end: 'Fri, Aug 26, 2016'
  }
};

export function ProductDisplay({ price }) {
  const {
    listingTitle,
    numPeople,
    listingDates: { start, end }
  } = productDisplayConfig;

  return (
    <div className={styles.root}>
      <div>
        <h2 className={styles.heading}>{listingTitle}</h2>
        <p>
          <span className={styles.price}>{price} GBP </span>
          <span className={styles.priceUnit}>/ 1 day</span>
        </p>
        <p className={styles.capacityLine}>
          Entire office for <span className={styles.capacity}>{numPeople}</span>
        </p>
        <p className={styles.datesLine}>
          <span className={styles.date}>{start}</span> to{' '}
          <span className={styles.date}>{end}</span>
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
