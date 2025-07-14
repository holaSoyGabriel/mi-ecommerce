/** @format */

// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const NavBar = () => {
	const categorias = ["Consolas", "Juegos", "Accesorios", "Arcade"];

	return (
		<nav style={{ textAlign: "center", marginBottom: "40px" }}>
			<h2 className="neon-text">Categorías</h2>
			{categorias.map((cat) => (
				<NavLink
					key={cat}
					to={`/categoria/${cat.toLowerCase()}`}
					className={({ isActive }) => (isActive ? "btn active" : "btn")}
					style={{ margin: "5px", display: "inline-block" }}
				>
					{cat}
				</NavLink>
			))}
		</nav>
	);
};

export default NavBar;
