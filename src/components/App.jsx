import React from 'react';
import Feedback from './feedback/Feedback';

const App = () => {
  return <Feedback />;
};

export default App;

// ---------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import Feedback from './feedback/Feedback';

// // export const App = () => {
// //   return <Feedback />;
// // };

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return <Feedback good={good} neutral={neutral} bad={bad} />;
//   }
// }

// export default App;
// ---------------------------------------------------------------------------------------------------------
