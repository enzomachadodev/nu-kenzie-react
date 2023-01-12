import styled from "styled-components";

export const StyledLandingPage = styled.div`
	border: 1px solid red;
	width: 100vw;
	height: 100vh;
	background-color: var(--gray-4);

	.landingBox {
		border: 1px solid red;
		width: 100%;
		height: auto;
		min-height: 500px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: auto;
	}

	.landingText {
		border: 1px solid red;
		height: 100%;
		width: 35%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
	}

	.landingImg {
		border: 1px solid red;
		height: 100%;
		width: 50%;
	}
`;
