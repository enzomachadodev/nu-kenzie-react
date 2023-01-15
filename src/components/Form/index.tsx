import { useContext } from "react";
import { GlobalContext } from "../../context";
import { StyledForm } from "./style";

const Form = () => {
	const { registerTransaction, setDescription, setType, setValue, description, type, value } =
		useContext(GlobalContext);

	return (
		<StyledForm onSubmit={registerTransaction}>
			<label htmlFor="descricao">Descrição</label>
			<input
				type="text"
				name="descricao"
				placeholder="Digite aqui sua descrição"
				value={description}
				required
				onChange={(e) => setDescription(e.target.value)}
			/>
			<div className="inputBox">
				<div className="valueBox">
					<label htmlFor="valor">Valor</label>
					<input
						type="number"
						name="valor"
						placeholder="0"
						value={value}
						required
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className="typeBox">
					<label htmlFor="tipo">Tipo de valor</label>
					<select
						name="tipo"
						value={type}
						required
						onChange={(e) => setType(e.target.value)}
					>
						<option value="" selected>
							Selecione
						</option>
						<option value="entrada">Entrada</option>
						<option value="saida">Saída</option>
					</select>
				</div>
			</div>
			<button className="button-1" type="submit">
				Inserir Valor
			</button>
		</StyledForm>
	);
};

export default Form;
