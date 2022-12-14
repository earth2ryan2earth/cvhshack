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
	NavbarHashLink,
} from '../styles/Navbar.style';
import LogoSVG from '../assets/CVFalcon.svg';
import useNavbarLinks from '../functions/NavbarLinks';
// import NavbarLinkScrollClick from '../functions/NavbarLinkScrollClick';

function Navbar() {
	const [dataVisible, setDataVisible] = useState(false);
	const [ariaExpanded, setAriaExpanded] = useState(false);
	const navOffset = useNavOffset();
	const navbarLinks = useNavbarLinks();
	function scrollWithOffset(el) {
		el.scrollIntoView(true);
	}

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
				{navbarLinks.active === '/' ? (
					<>
						{console.log('home')}
						{console.table(navbarLinks)}
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
					</>
				) : (
					<>
						{console.log('not home')}
						{console.table(navbarLinks)}
						<NavbarHashLink
							className='nav-info clr-white'
							to={navbarLinks.info}
							scroll={(el) => {
								scrollWithOffset(el);
							}}
						>
							<span aria-hidden='true'>01</span>Info
						</NavbarHashLink>
						<NavbarHashLink
							className='nav-about clr-white'
							to={navbarLinks.about}
							scroll={(el) => {
								scrollWithOffset(el);
							}}
						>
							<span aria-hidden='true'>02</span>About
						</NavbarHashLink>
						<NavbarHashLink
							className='nav-officers clr-white'
							to={navbarLinks.officers}
						>
							<span aria-hidden='true'>03</span>Officers
						</NavbarHashLink>
						<NavbarHashLink
							className='nav-sponsors clr-white'
							to={
								navbarLinks.active === '/apply'
									? navbarLinks.apply
									: navbarLinks.active === '/sponsors'
									? navbarLinks.sponsors
									: '#'
							}
						>
							<span aria-hidden='true'>04</span>Sponsors
						</NavbarHashLink>
					</>
				)}
			</PrimaryNav>
		</PrimaryHeader>
	);
}

export default Navbar;
