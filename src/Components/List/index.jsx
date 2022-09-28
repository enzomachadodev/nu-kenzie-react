import "./index.css";
import { FaTrash } from "react-icons/fa";

const List = ({ setListTransactions, listTransactions, filter }) => {
	function remove(id) {
		let newList = listTransactions.filter((elem) => {
			return elem.description !== id;
		});

		setListTransactions(newList);
	}
	console.log(listTransactions.length);

	return (
		<ul className="list">
			{listTransactions.length === 0 ? (
				<h1>Você ainda não possui nenhum lançamento</h1>
			) : (
				filter.map((transaction, index) =>
					transaction.type === "Entrada" ? (
						<li key={index} className="entrada">
							<div className="divLi">
								<h3>{transaction.description}</h3>

								<div className="endDiv">
									<span>{transaction.value}</span>
									<button
										id={transaction.description}
										className="trashBtn"
										type="button"
										onClick={(event) =>
											remove(event.target.id)
										}
									>
										<FaTrash id={transaction.description} />
									</button>
								</div>
							</div>
							<small>{transaction.type}</small>
						</li>
					) : (
						<li key={index} className="saida">
							<div className="divLi">
								<h3>{transaction.description}</h3>

								<div className="endDiv">
									<span>{transaction.value}</span>
									<button
										id={transaction.description}
										className="trashBtn"
										type="button"
										onClick={(event) =>
											remove(event.target.id)
										}
									>
										<FaTrash id={transaction.description} />
									</button>
								</div>
							</div>
							<small>{transaction.type}</small>
						</li>
					)
				)
			)}
		</ul>
	);
};

export default List;
