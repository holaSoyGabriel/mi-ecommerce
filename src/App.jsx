/** @format */

// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import RegistroPreguntas from "./components/RegistroPreguntas";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<Bienvenida />} />
					<Route path="/registro-pregunta" element={<RegistroPreguntas />} />
					<Route
						path="/categoria/:idCategoria"
						element={<ItemListContainer />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
