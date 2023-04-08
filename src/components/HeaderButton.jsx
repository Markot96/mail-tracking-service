import '../styles/HeaderButton.css';

function HeaderButton(props) {
  return (
    <div className='header-button'>
      {props.text}
    </div>
  );
}

export default HeaderButton;