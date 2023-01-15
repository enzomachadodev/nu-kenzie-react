import { StyledList } from "./style";
import { useContext } from "react";
import { GlobalContext, ITransaction } from "../../context";
import Card from "../Card";
import EmptyUl from "../EmptyUl";

const List = () => {
	const { transactions, setFilter, filter } = useContext(GlobalContext);

	let filtered =
		filter === "todos" ? transactions : transactions.filter((e) => e.type === filter);

	return (
		<StyledList>
			<div className="filter">
				<h3>Resumo financeiro</h3>
				<div className="btnBox">
					<button
						className={`button-2 ${filter === "todos" ? "active" : ""}`}
						onClick={() => setFilter("todos")}
					>
						Todos
					</button>
					<button
						className={`button-2 ${filter === "entradas" ? "active" : ""}`}
						onClick={() => setFilter("entrada")}
					>
						Entradas
					</button>
					<button
						className={`button-2 ${filter === "saida" ? "active" : ""}`}
						onClick={() => setFilter("saida")}
					>
						Despesas
					</button>
				</div>
			</div>

			{filtered.length === 0 ? (
				<EmptyUl />
			) : (
				filtered.map((e: ITransaction) => <Card e={e} />)
			)}
		</StyledList>
	);
};

export default List;
