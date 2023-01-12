import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<StyledHeader>
			<div className="navContainer">
				<h1>
					<span>Nu</span> Kenzie
				</h1>
				<Link to={"/"} className="button-2">Sair</Link>
			</div>
		</StyledHeader>
	);
};

export default Header;
