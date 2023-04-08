import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react';
import NumberInput from './components/NumberInput';
import PostServices from './components/PostServices';

function App() {

  const [isGuest, setIsGuest] = useState();

  const handleOnClick = (() => {
    setIsGuest(!isGuest);
  });

  return (
    <div className='app'>
      <Header isGuest={isGuest} />
      <div>
        <button onClick={handleOnClick}>change state</button>
      </div>
      <NumberInput />
      <PostServices />
      <Footer />
    </div>
  );
}

export default App;
