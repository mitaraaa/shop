import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Image = styled.img`
	width: 40%;
	min-width: 400px;
	transition: 200ms;
	${mobile({ "min-width": "360px" })}
`;

const Container = styled.div`
	margin: 5px;
	display: flex;
	width: 400px;
	height: 450px;
	display: flex;
	flex-direction: column;
	position: relative;
	cursor: pointer;
	transition: 200ms;

	${mobile({
		"min-width": "360px",
		"flex-direction": "column",
		"align-items": "center",
	})}

	&:hover ${Image} {
		opacity: 0.8;
		transform: scale(0.95);
	}
`;

const Name = styled.span`
	font-size: 18px;
	text-align: left;
	${mobile({ "text-align": "center" })}
`;

const Price = styled.span`
	font-size: 18px;
	text-align: left;
	${mobile({ "text-align": "center" })}
	color: lightgray;
`;

const Product = ({ product }) => {
	return (
		<Link
			to={`/product/${product._id}`}
			style={{ color: "black", textDecoration: "none" }}
		>
			<Container>
				<Image src={product.img}></Image>
				<Name>
					{product.types.join(" ")} {product.title}
				</Name>
				<Price>{product.price} ₽</Price>
			</Container>
		</Link>
	);
};

export default Product;
