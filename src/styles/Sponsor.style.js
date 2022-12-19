import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardImg = styled.img`
	width: 100%;
	aspect-ratio: 1 / 1.25;
	object-fit: contain;

	@media (min-width: 60em) {
		aspect-ratio: 1 / 1;
	}
`;

export const CardContent = styled.div`
	background-color: rgb(1 2 20);
	margin: 0.5rem 0.5rem 2rem;
	padding: 0.5rem;
	box-shadow: 0 0.25rem 1rem rgb(255 255 255 / 0.2);
`;

export const CardTitle = styled.h2``;
