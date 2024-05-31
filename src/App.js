import React from 'react';
import './App.css';
import Navigator from './components/navBar/nav'
import Logo from './components/logo/logo';
import TagLine from './components/liveFashion/tagLine';
import Tshirtimg from './components/hero_section/tshirt/tshirt';
import Beachtext from './components/hero_section/BEACHtext/beachtext'

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
    
    <Beachtext/>

    <div className='herosection'>
      <Tshirtimg/>
    </div>
      
    
    </>
  );
}

export default App;
