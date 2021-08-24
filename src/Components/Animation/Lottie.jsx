import React from 'react';
import Lottie from 'react-lottie';
import PropTypes, { shape, string } from 'prop-types';

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={ defaultOptions } height={ height } width={ width } />
    </div>
  );
}

LottieAnimation.propTypes = {
  lotti: PropTypes.objectOf(shape(string)).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
