import styled from 'styled-components';
import CVHS from '../assets/CVHS.jpg';
import { Link } from 'react-router-dom';

export const Title = styled.div`
	position: relative;
`;

export const TitleParallax = styled.div`
	background-image: url(${CVHS});
	height: 100vh;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.6;
	position: relative;
	z-index: -1;
`;

export const TitleContainer = styled.div`
	position: absolute;
	width: 75%;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -10%);
	z-index: 10;

	&,
	&::before,
	&::after {
		box-sizing: border-box;
	}
`;

export const TitleTitle = styled.h1`
	font-family: 'Righteous', 'Poiret One', serif;
	font-size: 3rem;
`;

export const TitleToApplyContainer = styled.div`
	color: #34c9e0;
	&:hover {
		transform: scale(1.2);
		color: #c62368;
	}
`;

export const TitleToApply = styled(Link)`
	font-size: 2rem;
	text-decoration: none;
	color: inherit;

	&::before {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 640 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z' fill='%23ffffff'/%3E%3C/svg%3E");
		position: relative;
		top: 0.25rem;
		left: -0.5rem;
	}
`;

export const TitleNextEvent = styled.div``;

export const TitleNextEventDate = styled.p`
	&::before {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z' fill='%23ffffff'/%3E%3C/svg%3E");
		position: relative;
		top: 0.25rem;
		left: -0.5rem;
	}
`;

export const TitleNextEventLocation = styled.p`
	&::before {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z' fill='%23ffffff'/%3E%3C/svg%3E");
		position: relative;
		top: 0.25rem;
		left: -0.5rem;
	}
`;

export const TitleNextEventCountdown = styled.div`
	& div {
		font-family: 'Anonymous Pro', monospace;
		display: inline-block;
		padding-inline: 0.5rem;
		padding-block: 0.25rem;

		font-size: 1.5em;
		font-weight: 100;
		filter: drop-shadow(0 0 1.25rem #48c8ff);

		& span {
			color: #b1cdf1;
			display: block;
			font-size: 0.75em;
			font-weight: 400;
		}
	}
`;
