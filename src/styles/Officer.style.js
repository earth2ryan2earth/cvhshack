import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
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
	margin: 0.5rem 0.5rem 2rem;
	padding: 0.5rem;
	box-shadow: 0 0.25rem 1rem rgb(255 255 255 / 0.2);
`;

export const CardTitle = styled.h3`
	font-weight: 900;
	color: #c62368;
	font-size: 1.25rem;
	line-height: 1.3;
`;

export const CardDescription = styled.p``;
