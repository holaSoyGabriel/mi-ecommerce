/** @format */

// src/components/Item.jsx
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, categoria }) => {
	return (
		<div className="card">
			<h3>{nombre}</h3>
			<p>Categoría: {categoria}</p>
			<p>Precio: ${precio}</p>
			<Link to={`/item/${id}`} className="btn">
				Ver detalle
			</Link>
		</div>
	);
};

export default Item;
