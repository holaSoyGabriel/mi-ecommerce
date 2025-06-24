/** @format */

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer mensaje="¡Bienvenido a la tienda de Angel!" />
		</div>
	);
}

export default App;
