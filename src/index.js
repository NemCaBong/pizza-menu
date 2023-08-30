import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Alps Pizza Co.</h1>
		</header>
	);
}
function Menu() {
	const pizzas = pizzaData;
	const pizzaNum = pizzas.length;
	return (
		<main className="menu">
			<h2>Our menu</h2>
			{pizzaNum > 0 ? (
				<ul className="pizzas">
					{/* 
					forEach cannot be used here
					We need to create a new array so => map()
					*/}
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>
					We're still working on our menu. Please come back later 😖
				</p>
			)}
		</main>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const openHour = 8;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	return (
		<footer className="footer">
			{/* return JSX in {} */}
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 -{" "}
					{closeHour}:00 🎉
				</p>
			)}
		</footer>
	);
}
function Order(props) {
	return (
		<div className="order">
			<p>
				We're open until {props.closeHour}:00. Come visit us or order
				online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

function Pizza(props) {
	const pizza = props.pizzaObj;
	return (
		<li class="pizza">
			<img src={pizza.photoName} alt={pizza.name} />
			<div>
				<h3>{pizza.name}</h3>
				<p>{pizza.ingredients}</p>
				<span>${pizza.price}</span>
			</div>
		</li>
	);
}

// React v18  => rendering the root.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
