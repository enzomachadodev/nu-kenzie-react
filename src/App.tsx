import GlobalStyle from "./styles/global";
import RoutesMain from "./routes";
import GlobalProvider from "./context";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<GlobalProvider>
				<RoutesMain />
			</GlobalProvider>
		</>
	);
};

export default App;
