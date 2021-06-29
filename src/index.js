import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;

const App = () => (
  <svg width={width} height={height}>
    <circle
            cx= {centerX}
            cy= {centerY}
            r={centerY - (strokeWidth / 2)}
            fill='yellow'
            stroke='black'
            strokeWidth={strokeWidth}/>
    <circle
            cx= {centerX - eyeOffsetX}
            cy= {centerY - eyeOffsetY}
            r={eyeRadius}/>
    <circle
            cx= {centerX + eyeOffsetX}
            cy= {centerY - eyeOffsetY}
            r={eyeRadius}/>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



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
