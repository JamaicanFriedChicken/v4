import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="#64FFDA"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
      </g>
      <path
        stroke="#64FFDA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        // to draw a M
        d=" M 40, 65
                  V 40
                  L 50, 60
                  L 60, 40
                  V 65"
      />
    </g>
  </svg>
);

export default IconLoader;
