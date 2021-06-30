import React from 'react';
import '../../Styles/input.scss';

const Input = (
  {
    label, type, name, value, onChange, error, onBlur,
  },
) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className="input-component"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
