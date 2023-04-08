import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [isGuest, setIsGuest] = useState();

  const handleOnClick = (() => {
    setIsGuest(!isGuest);
  });

  return (
    <div className='app'>
      <Header isGuest={isGuest}/>
        <button onClick={handleOnClick}>change state</button>
        <div>track package field</div>
        <div>postal services that can be tracken</div>
      <Footer />
    </div>
  );
}

export default App;
