import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react';
import NumberInput from './components/NumberInput';

function App() {

  const [isGuest, setIsGuest] = useState();

  const handleOnClick = (() => {
    setIsGuest(!isGuest);
  });

  return (
    <div className='app'>
      <Header isGuest={isGuest} />
      <NumberInput />
      <button onClick={handleOnClick}>change state</button>
      <div>postal services that can be tracken</div>
      <Footer />
    </div>
  );
}

export default App;
