import React from "react";
import styled from "styled-components";
import { items } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 50px;
	padding: 20px;
	gap: 20px;
	${mobile({ gap: "0px" })}
`;

const Products = () => {
	return (
		<Container>
			{items.map((item) => (
				<Product item={item} key={item.id}></Product>
			))}
		</Container>
	);
};

export default Products;
