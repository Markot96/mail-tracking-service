import { useEffect, useState } from 'react';
import '../styles/Main.css';
import NumberInput from './NumberInput';
import PostServices from './PostServices';

function Main() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.novaposhta.ua/v2.0/json/')
      // fetch('https://reqres.in/api/users')
      .then((response) => {
        console.log('response', response)
        if (response.ok) {
          return response;
        }
        throw new Error("Server says bad response");
      })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='main'>
      <NumberInput />
      <div className='test'>
        {data && data.map((userData) => {
          console.log('userData.email', userData.email)
          return <div>{userData.email}</div>
        })}
      </div>
      <div className='test1'>
        1111
      </div>
      <PostServices />
    </div>
  )
}

export default Main;