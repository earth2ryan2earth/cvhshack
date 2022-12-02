import React, { useState } from 'react';
import {
	PrimaryHeader,
	Logo,
	MobileNavToggle,
	PrimaryNav,
	NavbarLinkLogo,
	NavbarHashLink,
} from '../styles/Navbar.style';
import LogoSVG from '../assets/CVFalcon.svg';
import useNavOffset from '../functions/NavOffset';

function Navbar() {
	const [dataVisible, setDataVisible] = useState(false);
	const [ariaExpanded, setAriaExpanded] = useState(false);
	const navOffset = useNavOffset();

	function scrollWithOffset(el) {
		el.scrollIntoView(true);
	}

	return (
		<PrimaryHeader id='nav' className='flex'>
			<NavbarLinkLogo to='#top' offset={-navOffset}>
				<Logo src={LogoSVG}></Logo>
			</NavbarLinkLogo>

			<MobileNavToggle
				aria-controls='primary-navigation'
				aria-expanded={ariaExpanded}
				onClick={() => {
					setAriaExpanded((curr) => !curr);
					setDataVisible((curr) => !curr);
				}}
			>
				<span className='sr-only'>Menu</span>
			</MobileNavToggle>

			<PrimaryNav
				id='primary-navigation'
				className='flex'
				data-visible={dataVisible}
			>
				<NavbarHashLink className='nav-home clr-white' to='/'>
					<span aria-hidden='true'>00</span>Home
				</NavbarHashLink>
				<NavbarHashLink
					className='nav-info clr-white'
					to='/#info'
					scroll={(el) => {
						scrollWithOffset(el);
					}}
				>
					<span aria-hidden='true'>01</span>Info
				</NavbarHashLink>
				<NavbarHashLink
					className='nav-about clr-white'
					to='/#about'
					scroll={(el) => {
						scrollWithOffset(el);
					}}
				>
					<span aria-hidden='true'>02</span>About
				</NavbarHashLink>
				<NavbarHashLink className='nav-sponsors clr-white' to='/sponsors'>
					<span aria-hidden='true'>03</span>Sponsors
				</NavbarHashLink>
			</PrimaryNav>
		</PrimaryHeader>
	);
}

export default Navbar;
