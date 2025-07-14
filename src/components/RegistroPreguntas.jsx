/** @format */

// src/components/RegistroPreguntas.jsx
import React, { useState } from "react";

const RegistroPreguntas = () => {
	const [mensaje, setMensaje] = useState("");

	const enviar = () => {
		console.log(`Mensaje enviado: ${mensaje}`);
		setMensaje("");
	};

	return (
		<section className="pantalla">
			<div className="contenedor">
				<h2 className="neon-text">¿Dudas o sugerencias?</h2>
				<textarea
					value={mensaje}
					onChange={(e) => setMensaje(e.target.value)}
					placeholder="Escribe tu mensaje aquí"
				></textarea>
				<button className="btn" onClick={enviar}>
					Enviar
				</button>
			</div>
		</section>
	);
};

export default RegistroPreguntas;
