
import React from 'react';
import './CSS/App.css';
import { useEffect } from 'react';
import WOW from 'wow.js';
import HeaderSection from './Section/HeaderSection'
import Spinner from './Components/loading_spinner';

function App() {
  useEffect(() => {
    const wow = new WOW({});
    wow.init();
  },[]);

  return (
    <div className='App'>
      <Spinner/>
      <HeaderSection/>
    </div>
  );
}

export default App;
