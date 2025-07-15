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
	{
		id: "3",
		nombre: "Cable AV clásico",
		precio: 20,
		categoria: "accesorios",
		descripcion: "Para conectar consolas retro a TVs modernas",
	},
	{
		id: "4",
		nombre: "Joystick Retro USB",
		precio: 45,
		categoria: "accesorios",
		descripcion: "Control estilo SNES para PC y emuladores",
	},
	{
		id: "5",
		nombre: "Fundita de cartuchos",
		precio: 15,
		categoria: "accesorios",
		descripcion: "Protege tus cartuchos con estilo pixelado",
	},
	{
		id: "6",
		nombre: "Sonic CD",
		precio: 80,
		categoria: "juegos",
		descripcion: "Plataformas frenéticas en SEGA CD",
	},
	{
		id: "7",
		nombre: "Final Fantasy VI",
		precio: 150,
		categoria: "juegos",
		descripcion: "Épica RPG de la era dorada de SNES",
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
