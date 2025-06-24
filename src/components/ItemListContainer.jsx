/** @format */

function ItemListContainer({ mensaje }) {
	const productos = [
		{
			id: 1,
			nombre: "Camiseta React",
			precio: 25,
			imagen: "https://via.placeholder.com/150",
		},
		{
			id: 2,
			nombre: "Taza JavaScript",
			precio: 15,
			imagen: "https://via.placeholder.com/150",
		},
		{
			id: 3,
			nombre: "Mouse inalámbrico",
			precio: 30,
			imagen: "https://via.placeholder.com/150",
		},
	];

	return (
		<section style={{ padding: "2rem", textAlign: "center" }}>
			<h3>{mensaje}</h3>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "1rem",
					flexWrap: "wrap",
				}}
			>
				{productos.map((item) => (
					<div
						key={item.id}
						style={{
							border: "1px solid #ccc",
							borderRadius: "8px",
							padding: "1rem",
							width: "200px",
							background: "#fff",
						}}
					>
						<img
							src={item.imagen}
							alt={item.nombre}
							style={{ width: "100%", borderRadius: "4px" }}
						/>
						<h4>{item.nombre}</h4>
						<p>${item.precio}</p>
						<button>Agregar al carrito</button>
					</div>
				))}
			</div>
		</section>
	);
}

export default ItemListContainer;
