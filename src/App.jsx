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
    <div className="app">
      <Header isGuest={isGuest}/>
        <button onClick={handleOnClick}>change state</button>
      <Footer />
    </div>
  );
}

export default App;
