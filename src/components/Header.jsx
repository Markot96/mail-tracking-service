import { useState } from 'react';
import '../styles/Header.css';
import mainLogo from '../assets/package-tracker-main-logo.png'
import profileIcon from '../assets/profile-icon.png'
import HeaderButton from './HeaderButton';



function Header() {

  const [isGuest, setIsGuest] = useState(true);
  // const handleOnClick = (() => {
  //   setIsGuest(!isGuest);
  // });

  const AuthorizationButtons = (() => {
    return (
      <div className='authorization'>
        <HeaderButton text='Login' />
        <HeaderButton text='Register' />
      </div>
    );
  });

  const MyAccountButtons = (() => {
    return (
      <div className='my-account'>
        <img src={profileIcon} className='profile-icon' alt='profile icon' />
        <HeaderButton text='Log Out' />
      </div>
    );
  });

  return (
    <div className='header'>
      <div className='container'>
        <div className='inner-header'>
          <img src={mainLogo} className='main-logo' alt='mainLogo' />
          <h1>Package Tracker</h1>
          {props.isGuest ? <AuthorizationButtons /> : <MyAccountButtons />}
        </div>
      </div>
    </div>
  );
}

export default Header;