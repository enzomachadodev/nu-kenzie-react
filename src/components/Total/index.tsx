import { StyledTotal } from "./style";

const Total = () => {
	return (
		<StyledTotal>
			<div>
				<h3>Saldo:</h3>
				<span>{`R$ ${"total"}`}</span>
			</div>
		</StyledTotal>
	);
};

export default Total;
