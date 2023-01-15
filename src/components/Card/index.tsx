import { StyledCard } from "./style";
import { GlobalContext, ITransaction } from "../../context";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

const Card = (props: { e: ITransaction }) => {
	const { setTransactions, transactions } = useContext(GlobalContext);

	return (
		<StyledCard props={props.e.type} data-aos="fade-up">
			<div className="titleBox">
				<h3>{props.e.description}</h3>
				<div className="valueBox">
					<p>{`R$ ${props.e.value}`}</p>
					<button
						className="button-2"
						onClick={() => {
							setTransactions(transactions.filter((e) => e.id !== props.e.id));
						}}
					>
						<FaTrash />
					</button>
				</div>
			</div>
			<p>{props.e.type === "entrada" ? "Entrada" : "Saída"}</p>
		</StyledCard>
	);
};

export default Card;
