import '../styles/NumberInput.css';
import SearchIcon from '../assets/search-icon.png'

function NumberInput() {

  return (
    <div className='number-input'>
      <div className='container'>
        <div className='inner-number-input'>
          <input type='text' name='name' className='text-input' />
          <div className='submit-button'>
            <img src={SearchIcon} className='search-icon' alt='search icon' />
            Пошук
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberInput;