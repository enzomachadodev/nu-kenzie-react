import styled from "styled-components";

interface IPropsInterface {
	props: string;
}

export const StyledCard = styled.li`
	width: 100%;
	margin-top: 20px;
	height: 100px;
	border-left: 5px solid
		${({ props }: IPropsInterface) => (props === "entrada" ? "var(--green)" : "var(--gray-2)")};
	border-radius: 8px;
	background-color: var(--gray-1);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	padding: 1rem;
	transition: all 0.5s;

	.titleBox {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.valueBox {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 30px;
	}

	&&:hover {
		background-color: var(--white);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
`;
