import styled from "styled-components";

export const StyledEmptyUl = styled.ul`
	height: 500px;
	padding: 1rem 0rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.noItems {
		width: 100%;
		height: 100px;
		border-left: 5px solid var(--gray-2);
		border-radius: 8px;
		background-color: var(--gray-1);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		padding: 1rem;

		div {
			height: 20px;
			background-color: var(--gray-2);
		}

		div:nth-child(1) {
			width: 60%;
		}

		div:nth-child(2) {
			width: 20%;
		}
	}
`;
