import React, { useState } from 'react';
import inputStyle from './submission.module.css';

function TextInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Text input box */}
      <textarea
        className={inputStyle.textInput}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="I am grateful for..."
      />
    </div>
  );
}

export default TextInput;