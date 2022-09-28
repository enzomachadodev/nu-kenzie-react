import "./index.css";

const Filter = ({ setFilter, children }) => {
	return (
		<>
			<div className="filter">
				<h3>Resumo Financeiro</h3>
				<ul>
					<li>
						<button onClick={() => setFilter("Todos")}>
							Todos
						</button>
					</li>
					<li>
						<button onClick={() => setFilter("Entrada")}>
							Entradas
						</button>
					</li>
					<li>
						<button onClick={() => setFilter("Saída")}>
							Despesas
						</button>
					</li>
				</ul>
			</div>
			{children}
		</>
	);
};

export default Filter;
