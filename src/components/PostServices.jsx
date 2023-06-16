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
        <div className='post-service-details'>
          <p>{props.name}</p>
          <div className='post-service-info'>
            <p className="info-header info">Відправлення:</p>
            {props.isInternational && <p className="info">Міжнародні</p>}
            <p className="info">В межах країни</p>
            {props.isUrgent && <p className="info">Термінові</p>}
            <p className="info">Нетермінові</p>
          </div>
          <div className='post-service-info'>
            <p className="info-header info">Термін доставки:</p>
            <p className="info">{props.deliveryTime}</p>
          </div>
        </div>
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
              isInternational={postalService.isInternational}
              isUrgent={postalService.isUrgent}
              deliveryTime={postalService.deliveryTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostServices;
