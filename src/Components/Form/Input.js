import React from 'react';
import '../../Styles/input.scss';

const Input = ({ label, type, name }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className="input-component" type={type} />
      <p>Error</p>
    </div>
  );
};

export default Input;
