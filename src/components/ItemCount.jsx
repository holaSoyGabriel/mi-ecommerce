/** @format */

// src/components/ItemCount.jsx
import React, { useState } from "react";

const ItemCount = ({ stock = 10, inicial = 1 }) => {
	const [cantidad, setCantidad] = useState(inicial);

	const incrementar = () => {
		if (cantidad < stock) setCantidad(cantidad + 1);
	};

	const decrementar = () => {
		if (cantidad > 1) setCantidad(cantidad - 1);
	};

	const agregarAlCarrito = () => {
		console.log(`Agregado al carrito: ${cantidad} unidades`);
		// Aquí luego conectas con el contexto del carrito
	};

	return (
		<div style={{ marginTop: "25px" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "20px",
					marginBottom: "15px",
				}}
			>
				<button className="btn" onClick={decrementar}>
					-
				</button>
				<span style={{ fontSize: "1.6rem", color: "#fff" }}>{cantidad}</span>
				<button className="btn" onClick={incrementar}>
					+
				</button>
			</div>
			<button className="btn" onClick={agregarAlCarrito}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCount;
