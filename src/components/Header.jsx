import { useState } from 'react';
import '../styles/Header.css';
import mainLogo from '../assets/package-tracker-main-logo.png'
import profileIcon from '../assets/profile-icon.png'
import HeaderButton from './HeaderButton';
import AuthorizationButtons from './AuthorizationButtons';



function Header() {

  const [isGuest, setIsGuest] = useState(true);

  const MyAccountButtons = (() => {
    return (
      <div className='my-account'>
        <img src={profileIcon} className='profile-icon' alt='profile icon' />
        <HeaderButton text='Log Out' />
      </div>
    );
  });

  const handleStateChange = ((isRegister) => {
    console.log(isRegister, 'isRegister');
  })

  return (
    <div className='header'>
      <div className='container'>
        <div className='inner-header'>
          <img src={mainLogo} className='main-logo' alt='mainLogo' />
          <h1>Package Tracker</h1>
          {isGuest ? <AuthorizationButtons onStateChange={handleStateChange} isGuest={isGuest} /> : <MyAccountButtons />}
        </div>
      </div>
    </div>
  );
}

export default Header;