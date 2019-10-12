import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import styles from './About.scss';

const About = ({ isMobile }) => (
  <h1 className={styles.About}>Estas usando 2222 - {isMobile ? 'Celular' : 'Desktop'}</h1>
);

About.propTypes = {
  isMobile: bool
};

export default connect(({ device }) => ({
  isMobile: device.isMobile
}))(About);
