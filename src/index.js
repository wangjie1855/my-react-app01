import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

// function tick() {
//     const element = (
//       <div>
//         <h1>hello word!</h1>
//         <h1>时间：{new Date().toLocaleTimeString()}</h1>
//       </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick,1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);