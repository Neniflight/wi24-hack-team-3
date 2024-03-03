import React from 'react';
import buttonStyle from './button.module.css';

const Button = ({children, className}) => {
    return (
      <button className={`${buttonStyle.button} ${className}`}>
        {children}
      </button>
    );
  }

  export default Button;