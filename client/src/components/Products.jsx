import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 50px;
	padding: 20px;
	gap: 20px;
	${mobile({ gap: "0px", padding: "0px", "justify-content": "flex-start" })}
`;

const Products = () => {
	const [products, setProducts] = useState([]);
	const location = useLocation();
	const search = location.pathname.split("/")[2] || null;

	useEffect(() => {
		const source = axios.CancelToken.source();
		const getProducts = async () => {
			try {
				const res = await axios.get(
					search
						? "http://localhost:5000/api/products/search/" + search
						: "http://localhost:5000/api/products",
					{ cancelToken: source.token }
				);
				setProducts(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		getProducts();
		return () => {
			source.cancel();
		};
	});

	return (
		<Container>
			{products.map((product) => (
				<Product product={product} key={product.id}></Product>
			))}
		</Container>
	);
};

export default Products;
