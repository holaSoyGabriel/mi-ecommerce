/** @format */

// src/components/Bienvenida.jsx
import React from "react";
import { Link } from "react-router-dom";

const Bienvenida = () => {
	return (
		<section className="pantalla">
			<div className="contenedor">
				<h2 className="neon-text">¡Bienvenido a Arcadia!</h2>
				<p>Explora nuestro catálogo y revive la era retro</p>
				<Link to="/categoria/juegos" className="btn">
					Ir al catálogo
				</Link>
			</div>
		</section>
	);
};

export default Bienvenida;
