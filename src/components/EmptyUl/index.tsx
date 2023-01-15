import { StyledEmptyUl } from "./style";
import { GlobalContext } from "../../context";
import { useContext } from "react";

const EmptyUl = () => {
	const { filter } = useContext(GlobalContext);

	return (
		<StyledEmptyUl>
			<h2>
				{filter === "todos"
					? "Você ainda não possui nenhum lançamento"
					: filter === "entrada"
					? "Você ainda não possui nenhuma entrada"
					: "Você ainda não possui nenhuma despesa"}
			</h2>
			<li className="noItems">
				<div></div>
				<div></div>
			</li>
			<li className="noItems">
				<div></div>
				<div></div>
			</li>
			<li className="noItems">
				<div></div>
				<div></div>
			</li>
		</StyledEmptyUl>
	);
};

export default EmptyUl;
