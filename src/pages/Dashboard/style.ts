import styled from "styled-components";

export const StyledDashboard = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--gray-4);

	.mainBox {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;

		@media (max-width:768px) {
			flex-direction: column;
		}
	}

	.formBox {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: 400px;

		@media (max-width:768px) {
        max-width: unset;
    }
	}
`;
