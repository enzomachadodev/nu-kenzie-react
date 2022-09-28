import "./index.css";
import { useState } from "react";

const Form = ({ setListTransactions }) => {
	const [description, setDescritpion] = useState("");
	const [value, setValue] = useState("");
	const [type, setType] = useState("");

	function transactionRegister(event) {
		event.preventDefault();

		const converter = (value) => {
			if (type === "Saída") {
				return value * -1;
			} else {
				return value;
			}
		};

		let transaction = {
			description: description,
			type: type,
			value: converter(+value),
		};

		setListTransactions((prev) => [...prev, transaction]);

		setValue("");
		setType("");
		setDescritpion("");
	}

	return (
		<form onSubmit={transactionRegister} className="form">
			<label htmlFor="description">Descrição</label>
			<input
				className="inputDescription"
				type="text"
				name="description"
				placeholder="Digite aqui sua descrição"
				onChange={(event) => setDescritpion(event.target.value)}
				value={description}
				required
			/>
			<small>Ex: Compra de roupas</small>

			<div className="valueDiv">
				<label htmlFor="value">Valor</label>
				<input
					className="inputValue"
					type="number"
					name="value"
					placeholder="0"
					onChange={(event) => setValue(event.target.value)}
					value={value}
					required
				/>
				<p>R$</p>
			</div>
			<div className="typeValueDiv">
				<label htmlFor="valueType">Tipo de valor</label>
				<select
					name="valueType"
					id="select"
					onChange={(event) => setType(event.target.value)}
					value={type}
				>
					<option defaultValue={0} value="">
						Selecione
					</option>
					<option value="Entrada">Entrada</option>
					<option value="Saída">Saída</option>
				</select>
			</div>

			<button className="insertBtn" type="submit">
				Inserir Valor
			</button>
		</form>
	);
};

export default Form;
