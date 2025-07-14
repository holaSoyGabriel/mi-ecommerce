/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
	{ id: "1", nombre: "GameBoy", precio: 120, categoria: "consolas" },
	{ id: "2", nombre: "NES", precio: 200, categoria: "consolas" },
	{ id: "3", nombre: "Sonic CD", precio: 80, categoria: "juegos" },
	{ id: "4", nombre: "Final Fantasy VI", precio: 150, categoria: "juegos" },
	{ id: "5", nombre: "Super Nintendo", precio: 180, categoria: "consolas" },
];

const ItemListContainer = () => {
	const { idCategoria } = useParams();
	const [productosFiltrados, setProductosFiltrados] = useState([]);

	useEffect(() => {
		const promesa = new Promise((resolve) => {
			setTimeout(() => {
				const filtrados = idCategoria
					? productos.filter((p) => p.categoria === idCategoria)
					: productos;
				resolve(filtrados);
			}, 1000);
		});

		promesa.then((res) => setProductosFiltrados(res));
	}, [idCategoria]);

	return (
		<section className="pantalla">
			<div className="contenedor">
				<h2 className="neon-text">
					{idCategoria ? `Categoría: ${idCategoria}` : "Todos los productos"}
				</h2>
				<ItemList productos={productosFiltrados} />
			</div>
		</section>
	);
};

export default ItemListContainer;
