/** @format */

// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="pantalla">
			<div className="contenedor">
				<h2 className="neon-text">404 - Página no encontrada</h2>
				<p>Esta ruta no existe en el mundo de Arcadia...</p>
				<Link to="/" className="btn">
					Volver al inicio
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
