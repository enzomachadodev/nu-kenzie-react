import { createContext, ReactNode, useState } from "react";

export interface ITransaction {
	id: number;
	value: number;
	description: string;
	type: string;
}

interface IGlobalContextProps {
	children: ReactNode;
}

interface IGlobalContext {
	transactions: ITransaction[];
	setTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>;
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	registerTransaction(e: React.SyntheticEvent<HTMLFormElement>): void;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
	setType: React.Dispatch<React.SetStateAction<string>>;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	description: string;
	type: string;
	value: string;
}
export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalContextProps) => {
	const [transactions, setTransactions] = useState<ITransaction[]>([]);
	const [filter, setFilter] = useState<string>("todos");

	const [contador, setContador] = useState<number>(0);
	const [type, setType] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [value, setValue] = useState<string>("");

	const valueConverter = (value: string) => {
		if (type === "saida") {
			let numb = +value;
			return numb * -1;
		}

		return +value;
	};

	const registerTransaction = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		const finalValue = valueConverter(value);

		setTransactions([
			...transactions,
			{ id: contador, description: description, value: finalValue, type: type },
		]);

		setContador(contador + 1);
		setDescription("");
		setValue("");
		setType("");
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions,
				setTransactions,
				filter,
				setFilter,
				registerTransaction,
				setDescription,
				setType,
				setValue,
				description,
				type,
				value,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
