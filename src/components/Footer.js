import React from "react";
import {
  PrimaryFooter,
  Logo,
} from '../styles/Footer.style';
import LogoSVG from '../assets/CVFalcon.svg';

function Footer() {

  return (
    <PrimaryFooter id='bottom' className='flex'>
      <a href="#top"><Logo src={LogoSVG}></Logo></a>
    </PrimaryFooter>
  );
}

export default Footer;