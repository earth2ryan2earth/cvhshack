import styled from 'styled-components';

export const Card = styled.div`
	display: grid;
	aspect-ratio: 1 / 1.5;

	& > * {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}
`;

export const CardImg = styled.img`
	width: 100%;
	aspect-ratio: 1 / 1.25;
	object-fit: cover;

	@media (min-width: 60em) {
		aspect-ratio: 1 / 1;
	}
`;

export const CardContent = styled.div`
	background-color: rgb(1 2 20);
	align-self: end;
	margin: 0.5rem 0.5rem 2rem;
	padding: 0.5rem;
	box-shadow: 0 0.25rem 1rem rgb(255 255 255 / 0.2);
`;

export const CardTitle = styled.h2``;

export const CardDescription = styled.p``;
