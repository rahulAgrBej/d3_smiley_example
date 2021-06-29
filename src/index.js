import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { Face } from './Face'

const width = 160;
const height = 160;

const faceArray = range(5 * 3);

const App = () => (
    faceArray.map(() => (
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={30}
        eyeOffsetY={30}
        eyeRadius={10 + Math.random() * 10}
        mouthWidth={10 + Math.random() * 10}
        mouthRadius={40}
      /> 
    ))
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
