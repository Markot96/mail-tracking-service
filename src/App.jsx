import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useState } from 'react';
import Main from './components/Main';

function App() {

  const [isGuest, setIsGuest] = useState();

  const handleOnClick = (() => {
    setIsGuest(!isGuest);
  });

  return (
    <div className='app'>
      <Header isGuest={isGuest} />
      {/* <div>
        <button onClick={handleOnClick}>change state</button>
      </div> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
