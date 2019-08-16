import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppChild from './appChild';

const App: React.FC = () => {
    const clickExample = (textString: string) => {
        alert(textString)
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Child To Parent
        <AppChild handler={() => clickExample('####')} />
      </header>
    </div>
  );
}

export default App;
