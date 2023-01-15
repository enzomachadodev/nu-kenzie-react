import { StyledTotal } from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Total = () => {
	const { total } = useContext(GlobalContext);

	return (
		<StyledTotal>
			<div>
				<h3>Saldo:</h3>
				<span>{`R$ ${total.toFixed(2)}`}</span>
			</div>
		</StyledTotal>
	);
};

export default Total;
