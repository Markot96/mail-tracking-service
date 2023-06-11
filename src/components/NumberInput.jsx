import '../styles/NumberInput.css';
import React, { useState } from 'react';
import packagesData from '../data/packagesData';
import SubmitButton from './SubmitButton';

function NumberInput() {

  const [packageNumber, setPackageNumber] = useState('');
  const [packageInfo, setPackageInfo] = useState(undefined);

  const handleInputChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const foundPackage = packagesData.items.find(
      (item) => item.package_number === packageNumber
    );
    console.log('foundPackage', foundPackage)

    setPackageInfo(foundPackage);
    setPackageNumber('');
  };
  console.log(packageInfo)

  return (
    <div className='number-input'>
      <div className='container'>
        <div className='inner-number-input'>
          <input
            type='text'
            name='name'
            className='text-input'
            onChange={handleInputChange}
          />
          <SubmitButton onClick={handleClick} />
          {packageInfo ? (
            <div>
              <h2>Package Information:</h2>
              <p>Package Number: {packageInfo.package_number}</p>
              <p>Date and Time of Sending: {packageInfo.date_time_sending}</p>
              <p>City of Departure: {packageInfo.departure_city}</p>
              <p>City of Arrival: {packageInfo.arrival_city}</p>
              <p>Category: {packageInfo.category}</p>
              <p>Status: {packageInfo.status}</p>
              <p>Sender Name: {packageInfo.sender_name}</p>
              <p>Receiver Name: {packageInfo.receiver_name}</p>
              <p>Post Office Address: {packageInfo.post_office_address}</p>
              <p>Post Office Number: {packageInfo.post_office_number}</p>
              <p>Arrival Date: {packageInfo.arrival_date}</p>
            </div>
          ) : (
            <p>No package information found.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default NumberInput;