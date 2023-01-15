import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header";
import { Container } from "../../components/Container/stlye";
import { StyledDashboard } from "./style";
import Form from "../../components/Form";
import List from "../../components/List";
import Total from "../../components/Total";

const Dashboard = () => {
	const cont = 1;
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, [cont]);
	return (
		<StyledDashboard>
			<Header />
			<Container>
				<div className="mainBox">
					<div className="formBox">
						<Form />
						<Total />
					</div>

					<List />
				</div>
			</Container>
		</StyledDashboard>
	);
};

export default Dashboard;
