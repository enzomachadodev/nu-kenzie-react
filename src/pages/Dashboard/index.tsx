const Dashboard = () => {
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
					<button className="joinBtn" type="button" onClick={() => setIsStart(!isStart)}>
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

export default Dashboard;
