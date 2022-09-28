import "./index.css";
import React from "react";

const TotalMoney = ({ listTransactions }) => {
	let total = listTransactions.reduce((prev, elem) => prev + +elem.value, 0);
	return (
		<div className="TotalMoney">
			<p>Valor Total:</p>
			<span>{total}</span>
		</div>
	);
};

export default TotalMoney;
