import React, { useContext } from 'react';
import Context from '../context';

export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  let size = isMobile && sizes[0];
  size = isTablet && (sizes[1] || sizes[0]);
  size = size || sizes[2] || sizes[1] || sizes[0];

  return size;
};

const Image = ({
  // eslint-disable-next-line react/prop-types
  src, sizes, alt, ...props
}) => {
  const { isMobile, isTablet } = useContext(Context);
  const size = getSize({ sizes, isMobile, isTablet });
  const url = `${src}?odnWidth=${size}`;

  return (
    <img src={url} alt={alt} {...props} />
  );
};

export default Image;
