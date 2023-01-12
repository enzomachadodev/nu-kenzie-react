import styled from "styled-components";

export const StyledHeader = styled.div`
	width: 100%;
	top: 0;
	min-height: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;

	-webkit-box-shadow: 0px 8px 20px 0px rgba(176, 176, 176, 1);
	-moz-box-shadow: 0px 8px 20px 0px rgba(176, 176, 176, 1);
	box-shadow: 0px 8px 20px 0px rgba(176, 176, 176, 1);

	.navContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		width: 100%;
		max-width: 1200px;

		h1 {
			font-weight: 900;
		}

		span {
			color: var(--color-primary);
		}
	}
`;
