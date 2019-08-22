import React from 'react';
import './App.css';
import Header from './page/Header';
import Main from './page/main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
