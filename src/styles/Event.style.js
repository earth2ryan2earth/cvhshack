import styled from 'styled-components';

export const EventCard = styled.li`
	display: block;
	box-sizing: border-box;
	box-shadow: 0 0 1rem 0.75rem rgb(255 255 255 / 0.2);
	background-color: #002233;
	cursor: pointer;

	&.fullwidth {
		grid-column: 1 / -1;
		width: 100%;
		height: 50vh;
	}

	&[data-visible='false'] {
		display: none;
	}

	&[data-selected='true'],
	&:focus-visible,
	&:not(.fullwidth):hover {
		border: 0.1rem solid #34c9e0;
		border-radius: 2rem;
	}
`;

export const EventCardTitle = styled.h1`
	font-family: 'Righteous', 'Poiret One', serif;
	font-size: 2rem;
`;
