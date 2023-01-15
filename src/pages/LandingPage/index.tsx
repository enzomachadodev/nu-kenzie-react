import { Container } from "../../components/Container/stlye";
import { StyledLandingPage } from "./style";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<StyledLandingPage>
			<Container>
				<div className="landingBox">
					<div className="landingText">
						<h3>
							<strong>Nu</strong> Finance
						</h3>
						<h1>Centralize o controle das suas finanças</h1>
						<span>de forma rápida e segura</span>
						<Link to={"/dashboard"} className="joinBtn">
							Iniciar
						</Link>
					</div>
					<div className="landingImg"></div>
				</div>
			</Container>
		</StyledLandingPage>
	);
};

export default LandingPage;
