import { NavLink } from 'react-router-dom';
import '../styles/AuthorizationButtons.css';
import HeaderButton from './HeaderButton';


function SubmitButton(props) {



  return (
    <div className='authorization'>
      {/* <NavLink exact to="/login">
        <HeaderButton onClick={onClick} text='Увійти' />
      </NavLink>
      <HeaderButton onClick={onClick} text='Зареєструватись' /> */}
    </div>
  );
};

export default SubmitButton;