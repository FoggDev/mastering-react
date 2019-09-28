import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

const Home = props => {
  const { isMobile } = props;

  return (
    <div className="Home">
      <h1>Home</h1>

      <p>
        You are using: {isMobile ? 'mobile' : 'desktop'}
      </p>
    </div>
  );
};

Home.propTypes = {
  isMobile: bool
};

const mapStateToProps = ({ device: { isMobile } }) => ({
  isMobile
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
