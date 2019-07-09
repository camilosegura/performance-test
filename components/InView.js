/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

const InView = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const wrapperEl = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, options);

    observer.observe(wrapperEl.current);
  });

  return (
    <div ref={wrapperEl}>
      {visible ? children : null}
    </div>
  );
};

export default InView;
