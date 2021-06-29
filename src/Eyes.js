
import React from 'react';

export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
    <React.Fragment>
        <circle
            r={eyeRadius}
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
        />
        <circle
            r={eyeRadius}
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
        />
    </React.Fragment>
);