import { useState } from 'react';
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
      <HeaderButton onClick={handleOnClickLogin} text='Увійти' />
      <HeaderButton onClick={handleOnClickRegister} text='Зареєструватись' />
    </div>
  );
};

export default AuthorizationButtons;