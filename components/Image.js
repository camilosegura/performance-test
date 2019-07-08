import React from 'react';

const Image = ({
  // eslint-disable-next-line react/prop-types
  src, sizes, alt, ...props
}) => (
  <img src={`${src}?odnWidth=${sizes[0]}&odnHeight=410&odnBg=ffffff`} alt={alt} {...props} />
);

export default Image;
