import React from 'react';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Box from './Box';
import Content from './Content';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#111827',
      height: '100%',
      minHeight: '100%',
    }}>
      <Navbar />
      <div className="Content">
        <Home/>
      </div>
    </div>
  );
}

export default App;


