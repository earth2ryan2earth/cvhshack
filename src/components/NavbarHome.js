import React, { useState } from 'react';
import useNavOffset from '../functions/NavOffset';
import {
	PrimaryHeader,
	Logo,
	MobileNavToggle,
	PrimaryNav,
	NavbarLinkScroll,
	NavbarLinkLogo,
	NavbarLink,
} from '../styles/Navbar.style';
import LogoSVG from '../assets/CVFalcon.svg';
// import NavbarLinkScrollClick from '../functions/NavbarLinkScrollClick';

function Navbar() {
	const [dataVisible, setDataVisible] = useState(false);
	const [ariaExpanded, setAriaExpanded] = useState(false);
	const navOffset = useNavOffset();

	return (
		<PrimaryHeader
			id='nav'
			className='flex'
		>
			<NavbarLinkLogo
				to='top'
				offset={-navOffset}
			>
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
				<NavbarLinkScroll
					className='nav-home clr-white'
					tabIndex='0'
					/* onKeyDown={(el) => NavbarLinkScrollClick(el)} */ activeClass='active'
					to='top'
					spy={true}
					smooth={true}
					hashSpy={true}
					offset={-navOffset}
					duration={50}
					isDynamic={true}
				>
					<span aria-hidden='true'>00</span>Home
				</NavbarLinkScroll>
				<NavbarLinkScroll
					className='nav-info clr-white'
					tabIndex='0'
					activeClass='active'
					to='info'
					spy={true}
					smooth={true}
					hashSpy={true}
					offset={-navOffset}
					duration={50}
					isDynamic={true}
				>
					<span aria-hidden='true'>01</span>Info
				</NavbarLinkScroll>
				<NavbarLinkScroll
					className='nav-about clr-white'
					tabIndex='0'
					activeClass='active'
					to='about'
					spy={true}
					smooth={true}
					hashSpy={true}
					offset={-navOffset}
					duration={50}
					isDynamic={true}
				>
					<span aria-hidden='true'>02</span>About
				</NavbarLinkScroll>
				<NavbarLinkScroll
					className='nav-officers clr-white'
					tabIndex='0'
					activeClass='active'
					to='officers'
					spy={true}
					smooth={true}
					hashSpy={true}
					offset={-navOffset}
					duration={50}
					isDynamic={true}
				>
					<span aria-hidden='true'>03</span>Officers
				</NavbarLinkScroll>
				<NavbarLink
					className='nav-sponsors clr-white'
					to='/sponsors'
				>
					<span aria-hidden='true'>04</span>Sponsors
				</NavbarLink>
			</PrimaryNav>
		</PrimaryHeader>
	);
}

export default Navbar;
