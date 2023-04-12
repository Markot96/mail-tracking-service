import '../styles/Login.css';
import HeaderButton from './HeaderButton';

function Login() {

  return (
    <div className='login'>
      <div className='container'>
        <div className='inner-login'>
          <input type='text' name='login' className='text-input' />
          <input type='text' name='password' className='text-input' />
          <HeaderButton text='Увійти' />
        </div>
      </div>
    </div>
  );
}

export default Login;