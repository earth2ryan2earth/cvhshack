import styled from 'styled-components';

export const EntrantsContainer = styled.ul`
	list-style: none;
	padding: 2rem;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 3rem;
	grid-auto-flow: dense;
`;
