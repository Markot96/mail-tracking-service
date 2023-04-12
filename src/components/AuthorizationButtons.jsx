import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/AuthorizationButtons.css';
import HeaderButton from './HeaderButton';


function AuthorizationButtons(props) {

  const [isRegister, setIsRegister] = useState(false);

  const handleOnClickLogin = (() => {
    // setIsGuest(!props.isGuest);
  });

  const handleOnClickRegister = (() => {
    setIsRegister(true);
    props.onStateChange(isRegister);
  });

  return (
    <div className='authorization'>
      <NavLink exact to="/login">
        <HeaderButton onClick={handleOnClickLogin} text='Увійти' />
      </NavLink>
      <HeaderButton onClick={handleOnClickRegister} text='Зареєструватись' />
    </div>
  );
};

export default AuthorizationButtons;