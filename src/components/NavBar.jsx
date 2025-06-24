/** @format */

import CartWidget from "../components/CartWidget";

function NavBar() {
	return (
		<nav
			style={{ backgroundColor: "#1e90ff", padding: "1rem", color: "white" }}
		>
			<h2>Mi Tienda</h2>
			<ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
				<li>
					<a href="#">Inicio</a>
				</li>
				<li>
					<a href="#">Productos</a>
				</li>
				<li>
					<a href="#">Contacto</a>
				</li>
			</ul>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
