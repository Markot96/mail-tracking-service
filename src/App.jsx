import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
