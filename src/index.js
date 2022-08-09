// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './app.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(<Main />, rootElement);



import React from "react";
import ReactDOM from "react-dom/client";

import App from './app';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);