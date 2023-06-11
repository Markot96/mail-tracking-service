import { useEffect, useState } from 'react';
import '../styles/Results.css';

function Results() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch('https://api.novaposhta.ua/v2.0/json/')
    fetch('https://reqres.in/api/users')
      .then((response) => {
        // console.log('response', response)
        if (response.ok) {
          return response;
        }
        throw new Error("Server says bad response");
      })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log('data', data)

  return (
    <div className='results'>
      <div className='container'>
        <div className='inner-results'>
          <p>Статус: </p>
          <p>Час прибуття: </p>
          {data && data.map((userData) => {
            console.log('userData.email', userData.email)
            return <div>{userData.email}123</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Results;