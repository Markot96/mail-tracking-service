import '../styles/Main.css';
import NumberInput from './NumberInput';
import PostServices from './PostServices';

function Main() {

  return (
    <div className='main'>
      <NumberInput />
      <PostServices />
    </div>
  )
}

export default Main;