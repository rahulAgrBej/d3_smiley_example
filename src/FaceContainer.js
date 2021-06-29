
import React from 'react';

export const FaceContainer = ({children, width, height, centerX, centerY}) => (
<svg width={width} height={height}>
    {/* this is a group element, everything here moves together} */}
    <g transform={`translate(${centerX}, ${centerY})`}>
        {children}
    </g>
</svg>
);