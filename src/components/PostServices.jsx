import '../styles/PostServices.css';
import { useState } from 'react';
import postalServicesData from '../data/postalServicesData';

function PostServices() {
  const [selectedService, setSelectedService] = useState(0);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const PostService = (props) => {
    const isSelected = selectedService === props.id;

    return (
      <div
        className={`post-service ${isSelected ? 'selected' : ''}`}
        onClick={() => handleServiceClick(props.id)}
      >
        <img src={props.logo} className='post-logo' alt='' />
        <p>{props.name}</p>
      </div>
    );
  };

  return (
    <div className='post-services'>
      <div className='container'>
        <div className='inner-post-services'>
          {postalServicesData.map((postalService) => (
            <PostService
              key={postalService.id}
              id={postalService.id}
              name={postalService.name}
              logo={postalService.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostServices;
