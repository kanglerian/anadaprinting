import React from 'react'
import Lottie from 'lottie-react';
import notFoundAnimation from '../../images/not-found.json';

function NotFound() {
  return (
    <Lottie animationData={notFoundAnimation} loop={true} />
  )
}

export default NotFound