import React from 'react';
import '../Styles/Footer.scss';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. All rights reserved</p>
    </footer>
  );
};

export default Footer;
