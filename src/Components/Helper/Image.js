/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import '../../Styles/image.scss';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className="wrapper">
      {!skeleton && <div className="skeleton" />}
      <img onLoad={handleLoad} className="img-fundo" {...props} alt={alt} />
    </div>
  );
};

export default Image;
