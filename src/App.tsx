import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import YourComponent from './YourComponent';

const App = () => {
  return (
    <BrowserRouter basename="/portfolioRebuild">
      <YourComponent />
    </BrowserRouter>
  );
};

export default App;