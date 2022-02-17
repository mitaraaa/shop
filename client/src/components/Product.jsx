import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

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

	${mobile({ "min-width": "360px" })}

	&:hover ${Image} {
		opacity: 0.8;
		transform: scale(0.95);
	}
`;

const Name = styled.span`
	font-size: 18px;
	text-align: left;
	${mobile({ "margin-left": "20px" })}
`;

const Price = styled.span`
	font-size: 18px;
	text-align: left;
	color: lightgray;
	${mobile({ "margin-left": "20px" })}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.src}></Image>
			<Name>
				{item.type.join(" ")} {item.itemName}
			</Name>
			<Price>{item.price} ₽</Price>
		</Container>
	);
};

export default Product;
