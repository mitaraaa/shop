import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Products></Products>
			<Footer></Footer>
		</div>
	);
};

export default Home;
