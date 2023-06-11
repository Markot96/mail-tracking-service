import '../styles/NumberInput.css';
import React, { useState } from 'react';
import packageData from '../data/packagesData';
import SubmitButton from './SubmitButton';

function NumberInput() {

  const [packageNumber, setPackageNumber] = useState('');
  const [packageInfo, setPackageInfo] = useState(null);

  const handleInputChange = (event) => {
    setPackageNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const foundPackage = packageData.items.find(
      (item) => item.package_number === packageNumber
    );

    setPackageInfo(foundPackage);
    setPackageNumber('');
  };

  return (
    <div className='number-input'>
      <div className='container'>
        <div className='inner-number-input'>
          <input type='text' name='name' className='text-input' />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default NumberInput;