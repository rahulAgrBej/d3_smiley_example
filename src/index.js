import React from 'react';
import ReactDOM from 'react-dom';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;

const mouthWidth = 20;
const mouthRadius = 180;

const App = () => (
  <svg width={width} height={height}>
    {/* this is a group element, everything here moves together} */}
    <g transform={`translate(${centerX}, ${centerY})`}> 
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
      <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
      
      <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius}/>
    </g>
    
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(
<App />,
rootElement
);



/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
