import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
    <CompareStickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
