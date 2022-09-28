import "./index.css";

const Header = ({ children }) => {
	return (
		<header className="cabecalho">
			<div>
				<h1>
					<span>Nu</span>Kenzie
				</h1>
				{children}
			</div>
		</header>
	);
};

export default Header;
