import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import navBack from '../assets/navBack.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

export const PrimaryHeader = styled.header`
	background-image: url(${navBack});
	background-repeat: no-repeat;
	background-position: left center;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 1000;

	&:before {
		content: '';
		position: absolute;
		inset: 0;
		backdrop-filter: blur(1rem);
		mask: linear-gradient(0.25turn, hsl(0 0% 0% / 0.3), 30%, black);
	}
`;

export const Logo = styled.img`
	height: 3rem;
	margin-left: 2rem;
	margin-block: 1rem;
`;

export const MobileNavToggle = styled.button`
	display: none;

	@media (max-width: 35em) {
		display: block;
		position: absolute;
		z-index: 9999;
		background-color: transparent;
		background-image: url(${menu});
		background-repeat: no-repeat;
		width: 2rem;
		aspect-ratio: 1;
		border: 0;
		top: 2rem;
		right: 2rem;
	}

	&[aria-expanded='true'] {
		@media (max-width: 35em) {
			background-image: url(${close});
		}
	}
`;

export const PrimaryNav = styled.nav`
	list-style: none;
	padding: 0;
	margin: 0;

	// for large screens adjust the space between elements and the padding around the gradient background
	@media (min-width: 35em) {
		--gap: clamp(1.5rem, 5vw, 3rem);
		padding-inline: clamp(4rem, 50vw, 6.5rem);
	}

	// for small screens, display as a pullout sidebar
	@media (max-width: 35em) {
		overflow-y: scroll;
		--gap: 2em;

		position: fixed;
		z-index: 1000;
		inset: 0 0 0 30%;

		flex-direction: column;
		padding: min(30vh, 10rem) 2rem;

		transform: translateX(100%);
		transition: transform 350ms ease-out;
	}

	&[data-visible='true'] {
		@media (max-width: 35em) {
			transform: translateX(0%);
		}
	}
`;

export const NavbarLinkScroll = styled(LinkScroll)`
	position: relative;
	height: 5rem;
	box-sizing: border-box;
	text-decoration: none;
	padding-block: 2rem;
	cursor: pointer;

	& > [aria-hidden='true'] {
		font-family: 'Georgia', serif;
		font-weight: 700;
		font-size: 1.125rem;
		margin-inline-end: 0.75em;
	}

	& > span[aria-hidden] {
		@media (min-width: 35em) and (max-width: 56.25em) {
			display: none;
		}
	}

	&.active span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5rem;
		background-color: #34c9e0;
		border-radius: 0.25rem;
	}
`;

export const NavbarLinkLogo = styled(LinkScroll)`
	position: relative;
	height: 5rem;
	box-sizing: border-box;
	text-decoration: none;
	cursor: pointer;

	& > [aria-hidden='true'] {
		font-family: 'Georgia', serif;
		font-weight: 700;
		font-size: 1.125rem;
		margin-inline-end: 0.75em;
	}

	& > span[aria-hidden] {
		@media (min-width: 35em) and (max-width: 56.25em) {
			display: none;
		}
	}

	&.active span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5rem;
		background-color: #34c9e0;
		border-radius: 0.25rem;
	}
`;

export const NavbarLink = styled(NavLink)`
	position: relative;
	height: 5rem;
	box-sizing: border-box;
	text-decoration: none;
	padding-block: 2rem;

	& > [aria-hidden='true'] {
		font-family: 'Georgia', serif;
		font-weight: 700;
		font-size: 1.125rem;
		margin-inline-end: 0.75em;
	}

	& > span[aria-hidden] {
		@media (min-width: 35em) and (max-width: 56.25em) {
			display: none;
		}
	}

	&.active span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5rem;
		background-color: #34c9e0;
		border-radius: 0.25rem;
	}
`;

export const NavbarHashLink = styled(HashLink)`
	position: relative;
	height: 5rem;
	box-sizing: border-box;
	text-decoration: none;
	padding-block: 2rem;

	& > [aria-hidden='true'] {
		font-family: 'Georgia', serif;
		font-weight: 700;
		font-size: 1.125rem;
		margin-inline-end: 0.75em;
	}

	& > span[aria-hidden] {
		@media (min-width: 35em) and (max-width: 56.25em) {
			display: none;
		}
	}

	&.active span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5rem;
		background-color: #34c9e0;
		border-radius: 0.25rem;
	}
`;
