import styled from 'styled-components';
import navBack from '../assets/navBack.svg';

export const PrimaryFooter = styled.footer`
	background-image: url(${navBack});
	background-repeat: no-repeat;
	background-position: left bottom;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

export const Logo = styled.img`
	margin: 2rem;
`;

export const MediaLinkContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-inline: 2rem;
`;

export const MediaLink = styled.a``;

export const MediaLinkImg = styled.img`
	background-color: white;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	height: 3rem;
`;
