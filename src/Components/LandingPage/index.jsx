import "./index.css";
import Image from "../../assets/landingpage-img.png";

const LandingPage = ({ children }) => {
	return (
		<div className="bodyLand">
			<main className="mainLand">
				<div className="textDiv">
					<h3>
						<span>Nu</span>Kenzie
					</h3>
					<h2>Centralize o controle das suas finanças</h2>
					<p>de forma rápida e segura</p>
					{children}
				</div>
				<div className="imgDiv">
					<img src={Image} alt="" />
				</div>
			</main>
		</div>
	);
};

export default LandingPage;
