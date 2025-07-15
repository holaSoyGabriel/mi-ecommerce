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
	{ id: "6", nombre: "Cable AV clásico", precio: 20, categoria: "accesorios" },
	{
		id: "7",
		nombre: "Joystick Retro USB",
		precio: 45,
		categoria: "accesorios",
	},
	{
		id: "8",
		nombre: "Fundita de cartuchos",
		precio: 15,
		categoria: "accesorios",
	},
	{
		id: "8",
		nombre: "Street Fighter II",
		precio: 110,
		categoria: "arcade",
		descripcion: "El clásico de peleas que definió una era",
	},
	{
		id: "9",
		nombre: "Metal Slug X",
		precio: 95,
		categoria: "arcade",
		descripcion: "Acción frenética en scroll lateral",
	},
	{
		id: "10",
		nombre: "Dance Dance Revolution Pad",
		precio: 75,
		categoria: "arcade",
		descripcion: "Alfombra original para bailar al ritmo retro",
	},
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
