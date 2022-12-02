import styled from 'styled-components';

export const OfficerContainer = styled.div`
	padding: 2rem;
	height: 100%;
	display: grid;
	--grid-layout-gap: 3rem;
	--grid-column-count: 4;
	--grid-item--min-width: 20rem;

	--gap-count: calc(var(--grid-column-count) - 1);
	--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
	--grid-item--max-width: calc(
		(100% - var(--total-gap-width)) / var(--grid-column-count)
	);

	grid-template-columns: repeat(
		auto-fill,
		minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
	);

	gap: var(--grid-layout-gap);

	/* grid-template-columns: repeat(auto-fit, minmax(100%/4, 1fr); */
`;
