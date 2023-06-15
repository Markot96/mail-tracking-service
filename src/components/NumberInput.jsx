import '../styles/NumberInput.css';
import React, { useState } from 'react';
import packagesData from '../data/packagesData';
import SubmitButton from './SubmitButton';

function NumberInput() {

  const [packageNumber, setPackageNumber] = useState('');
  const [packageInfo, setPackageInfo] = useState(undefined);
  const [isFirstTimeSearch, setIsFirstTimeSearch] = useState(true);

  const handleInputChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const handleClick = (event) => {
    setIsFirstTimeSearch(false);
    event.preventDefault();

    const foundPackage = packagesData.items.find(
      (item) => item.package_number === packageNumber
    );

    setPackageInfo(foundPackage);
  };

  return (
    <div className='number-input'>
      <div className='container'>
        <div className='inner-number-input'>
          <input
            type='text'
            name='name'
            className='text-input'
            value={packageNumber}
            onChange={handleInputChange}
          />
          <SubmitButton onClick={handleClick} />
          {packageInfo ? (
            <div className='package-data-container'>
              <h2>Інформація про посилку:</h2>
              <p>Номер посилки: {packageInfo.package_number}</p>
              <p>Час відправлення: {packageInfo.date_time_sending}</p>
              <p>Місто відправлення: {packageInfo.departure_city}</p>
              <p>Місто прибуття: {packageInfo.arrival_city}</p>
              <p>Категорія: {packageInfo.category}</p>
              <p>Статус: {packageInfo.status}</p>
              <p>Ім'я відправника: {packageInfo.sender_name}</p>
              <p>Ім'я отримувача: {packageInfo.receiver_name}</p>
              <p>Поштове відділення №{packageInfo.post_office_number}, {packageInfo.post_office_address}</p>
              <p>Дата прибуття: {packageInfo.arrival_date}</p>
              <p>Терміновість: {packageInfo.is_urgent}</p>
            </div>
          ) : !isFirstTimeSearch && (
            <p className='package-not-found'>Не знайдено інформації щодо даної посилки. Перевірте код відправлення.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NumberInput;
