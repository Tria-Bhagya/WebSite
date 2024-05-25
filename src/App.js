import React from 'react';
import './App.css';
import Navigator from './navBar/nav'
import Logo from './components/logo';
import TagLine from './components/liveFashion/tagLine';
import Tshirtimg from './components/hero_section/tshirt';
import Beachtext from './components/hero_section/BEACH/beachtext'

function App() {  
  return (
    <>
    <div className='header'>
      <Logo/>
      <Navigator/>
    </div>
    <div className='tagline'>

    <TagLine/>
    </div>
    <div className='herosection'>
      <Beachtext/>
      <Tshirtimg/>
    </div>
      
    
    </>
  );
}

export default App;
