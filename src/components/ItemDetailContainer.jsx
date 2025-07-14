/** @format */

// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const productos = [
	{
		id: "1",
		nombre: "GameBoy",
		precio: 120,
		categoria: "consolas",
		descripcion: "Portátil retro",
	},
	{
		id: "2",
		nombre: "NES",
		precio: 200,
		categoria: "consolas",
		descripcion: "La clásica NES de Nintendo",
	},
];

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		const promesa = new Promise((resolve) => {
			setTimeout(() => {
				const encontrado = productos.find((p) => p.id === id);
				resolve(encontrado);
			}, 1000);
		});

		promesa.then((res) => setItem(res));
	}, [id]);

	return (
		<section className="pantalla">
			<div className="contenedor">
				{item ? <ItemDetail {...item} /> : <p>Cargando detalle...</p>}
			</div>
		</section>
	);
};

export default ItemDetailContainer;
