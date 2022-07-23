import styled from 'styled-components';

export const ApplicationContainer = styled.div`
	display: block;
	/* margin-bottom: 10rem; */
`;

export const ApplicationTitle = styled.h2`
	font-size: 2rem;
`;

export const ApplicationForm = styled.form`
	text-align: center;
	display: table;
	margin-inline: auto;
`;

export const ApplicationQueryContainer = styled.div`
	&[name='event'] {
		display: grid;
		grid-template-columns: 95% 5%;
	}
`;

export const ApplicationQuery = styled.input`
	&::placeholder {
		text-align: center;
	}
	&[type='text'] {
		margin-bottom: 0.5rem;
		width: 20rem;
	}
	&[type='submit'] {
		margin-top: 1rem;
	}
	&[type='checkbox'] {
		accent-color: #34c9e0;
	}
`;

export const ApplicationQueryLabel = styled.label`
	&:not([for='event']) {
		display: block;
	}
	&[for='event'] {
		text-align: center;
	}
`;

export const ReceiptContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10rem;
`;

export const ReceiptLI = styled.div``;

export const ReceiptInfo = styled.section`
	display: block;

	@media (min-width: 35em) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
	}
`;

export const ReceiptSection = styled.article`
	display: flex;
	flex-direction: column;
`;

export const ReceiptEvent = styled.h2`
	margin-top: 2rem;
	display: block;
`;

export const ReceiptSubtitle = styled.h3`
	font-family: 'Anonymous Pro';
	margin: 1.25rem;
`;

export const ReceiptContent = styled.p``;
