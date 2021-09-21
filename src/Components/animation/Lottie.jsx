/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

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
      <Lottie
        options={ defaultOptions }
        height={ height }
        width={ width }
        isClickToPauseDisabled
        className="teste"
      />
    </div>
  );
}
