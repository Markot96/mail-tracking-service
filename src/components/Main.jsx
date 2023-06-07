import '../styles/Main.css';
import NumberInput from './NumberInput';
import PostServices from './PostServices';
import Results from './Results';

function Main() {

  return (
    <div className='main'>
      <NumberInput />
      <Results />
      <PostServices />
    </div>
  )
}

export default Main;