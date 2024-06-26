// App.jsx
import React from 'react';
import '../src/STYLESHEET/App.css';
import Header from './Constant/Header/Header';
import Home from './components/Home/Home';
import Routes from './RouterLinks/Router';

function App() {
  return (
    <>
    <Header/>
    <Routes/>
    </>
  );
}

export default App;
