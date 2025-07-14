/** @format */

// src/components/ItemList.jsx
import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
	if (productos.length === 0) {
		return <p>Cargando productos...</p>;
	}

	return (
		<div
			style={{
				display: "grid",
				gap: "20px",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			}}
		>
			{productos.map((prod) => (
				<Item key={prod.id} {...prod} />
			))}
		</div>
	);
};

export default ItemList;
