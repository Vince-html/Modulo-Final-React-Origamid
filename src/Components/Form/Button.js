import React from 'react';
import '../../Styles/button.scss';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn-component">{children}</button>
  );
};

export default Button;
