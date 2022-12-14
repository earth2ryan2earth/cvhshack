import React from 'react';
import { PrimaryFooter, Logo } from '../styles/Footer.style';
import LogoSVG from '../assets/CVFalcon.svg';
import { HashLink } from 'react-router-hash-link';

function Footer() {
	return (
		<PrimaryFooter
			id='bottom'
			className='flex'
		>
			<HashLink to='#top'>
				<Logo src={LogoSVG}></Logo>
			</HashLink>
		</PrimaryFooter>
	);
}

export default Footer;
