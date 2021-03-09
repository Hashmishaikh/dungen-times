import React from 'react';
import './App.css';
import News from './component/News';
import { NewContextProvider } from './NewsContext';

function App() {
  return (
    <div className="App">
      <NewContextProvider>
        <News />
      </NewContextProvider>
    </div>
  );
}

export default App;
