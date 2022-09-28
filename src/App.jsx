import "./App.css";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Main from "./Components/Main";
import LeftDiv from "./Components/LeftDiv";
import RightDiv from "./Components/RightDiv";
import Form from "./Components/Form";
import TotalMoney from "./Components/TotalMoney";
import Filter from "./Components/Filter";
import List from "./Components/List";
import { useState } from "react";

const App = () => {
	const [isStart, setIsStart] = useState(true);

	const [listTransactions, setListTransactions] = useState([
		{ description: "Salário recebido", type: "Entrada", value: 2500 },
		{ description: "Conta de luz", type: "Saída", value: -150 },
	]);

	const [filter, setFilter] = useState("Todos");

	const lancamentosFiltrados =
		filter === "Todos"
			? listTransactions
			: listTransactions.filter((elem) => {
					return elem.type === filter;
			  });

	return (
		<div className="App">
			{isStart ? (
				<LandingPage>
					<button
						className="joinBtn"
						type="button"
						onClick={() => setIsStart(!isStart)}
					>
						Iniciar
					</button>
				</LandingPage>
			) : (
				<Dashboard>
					<Header>
						<button
							className="exitBtn"
							type="button"
							onClick={() => setIsStart(!isStart)}
						>
							Início
						</button>
					</Header>
					<Main>
						<LeftDiv>
							<Form
								listTransactions={listTransactions}
								setListTransactions={setListTransactions}
							/>
							<TotalMoney listTransactions={listTransactions} />
						</LeftDiv>
						<RightDiv>
							<Filter setFilter={setFilter} filter={filter}>
								<List
									setListTransactions={setListTransactions}
									listTransactions={listTransactions}
									filter={lancamentosFiltrados}
								/>
							</Filter>
						</RightDiv>
					</Main>
				</Dashboard>
			)}
		</div>
	);
};

export default App;
