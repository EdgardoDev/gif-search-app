import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddNewCategory = ({ setAppCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Small validation before submitting.
    if (inputValue.trim().length > 2) {
      setAppCategories(categories => [ inputValue, ...categories ]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

// PropTypes definition.
AddNewCategory.propTypes = {
  setAppCategories: PropTypes.func.isRequired,
}

