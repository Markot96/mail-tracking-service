import '../styles/SubmitButton.css';
import SearchIcon from '../assets/search-icon.png'

function SubmitButton(props) {

  return (
    <div className='submit-button' onClick={props.onClick}>
      <img src={SearchIcon} className='search-icon' alt='search icon' />
      <p className='search-button'>Пошук</p>
    </div>
  );
};

export default SubmitButton;