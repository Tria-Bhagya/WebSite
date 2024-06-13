import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselPage from './CarouselPage';
import Navigator from './components/navBar/nav';
import Logo from './components/logo/logo';
import TagLine from './components/liveFashion/tagLine';

// import CardPage from './CardPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';

function App() {
  return (
    <>
    <div className='header'>
        <Logo />
        <Navigator />
    </div>
    <div className='tagline'>
        <TagLine />
      </div>
<div className='content'>
<div className='heropage'>
    <CarouselPage/>
    </div>
</div>
    
    </>
  );
}

export default App;
