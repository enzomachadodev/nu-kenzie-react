
import Header from "../../components/Header";
import { Container } from "../../components/Container/stlye";
import { StyledDashboard } from "./style";
import Form from "../../components/Form";
import List from "../../components/List";

const Dashboard = () => {
	return (
		<StyledDashboard>
			<Header />
			<Container>
				<div className="mainBox">
					<Form />
					<List />
				</div>
			</Container>
		</StyledDashboard>
	);
};

export default Dashboard;
