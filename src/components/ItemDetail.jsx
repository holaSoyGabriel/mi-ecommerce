/** @format */

import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, nombre, precio, descripcion, categoria }) => {
	return (
		<div className="card">
			<h2>{nombre}</h2>
			<p>
				<strong>Descripción:</strong> {descripcion}
			</p>
			<p>
				<strong>Categoría:</strong> {categoria}
			</p>
			<p>
				<strong>Precio:</strong> ${precio}
			</p>

			<ItemCount stock={10} inicial={1} />
		</div>
	);
};

export default ItemDetail;
