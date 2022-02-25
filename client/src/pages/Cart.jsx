import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({
		padding: "10px",
		"flex-direction": "column",
		"align-items": "center",
	})}
	display: flex;
	flex-direction: row;
	gap: 50px;
`;

const Title = styled.h1`
	margin: 0;
	margin-top: 50px;
	margin-left: 100px;
	text-align: left;
	font-weight: 600;
	font-size: 36px;
	${mobile({ "text-align": "center", "margin-left": "0" })}
`;

const Products = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	${mobile({ gap: "0px" })}
`;

const Product = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	${mobile({
		"flex-direction": "column",
		"align-items": "center",
		"min-height": "none",
		"min-width": "260px",
	})}
	justify-content: flex-start;
	min-height: 140px;
	transition: 200ms;
`;

const ImageContainer = styled.div`
	width: 140px;
	height: 140px;
	${mobile({
		width: "260px",
		height: "260px",
	})}
`;

const Image = styled.img`
	width: 140px;
	height: 140px;
	${mobile({
		width: "260px",
		height: "260px",
	})}
`;

const InfoContainer = styled.div`
	width: 100%;
	height: 140px;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	${mobile({ "flex-direction": "column", height: "160px" })}
`;

const LeftInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Name = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 24px;
`;

const AmountText = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 18px;
	margin-right: 10px;
`;

const Price = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 24px;
	${mobile({ "margin-top": "20px" })}
`;

const RemoveButton = styled.button`
	padding: 15px;
	border: hidden;
	border-radius: 2px;
	background-color: white;
	font-size: 18px;
	color: black;
	font-weight: 500;
	cursor: pointer;
	transition: 200ms;

	&:hover {
		text-decoration: underline 2px;
	}
`;

const Summary = styled.div`
	flex: 1;
	min-width: 180px;
	max-width: 260px;
	max-height: 220px;
	padding: 20px;
	border: 1px solid lightgray;
	margin-right: 20px;

	display: flex;
	flex-direction: column;

	${mobile({
		border: "hidden",
		"min-width": "280px",
	})}
`;

const SummaryTitle = styled.h1`
	font-size: 24px;
	margin-top: 5px;
`;

const SummaryPrice = styled.span`
	font-size: 18px;
	font-weight: 500;
`;

const SummaryTotal = styled.h1`
	font-size: 24px;
`;

const BuyButton = styled.button`
	padding: 15px;
	border: 2px solid black;
	border-radius: 2px;
	min-width: 200px;
	background-color: white;
	font-size: 18px;
	color: black;
	font-weight: 500;
	cursor: pointer;

	transition: 200ms;

	&:hover:not([disabled]) {
		background-color: black;
		color: white;
	}
`;

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemove = (product) => {
		dispatch(removeProduct({ product }));
	};

	return (
		<Container>
			<Navbar></Navbar>
			<Title>Shopping cart</Title>
			<Wrapper>
				<Products>
					{cart.products.map((product) => (
						<Product>
							<ImageContainer>
								<Image src={product.product.img}></Image>
							</ImageContainer>
							<InfoContainer>
								<LeftInfo>
									<Name>{product.product.title}</Name>
									<AmountText>
										Price: {product.product.price} ₽
									</AmountText>
									<AmountText>
										Amount: {product.quantity}
									</AmountText>
								</LeftInfo>
								<Price>
									{product.product.price * product.quantity} ₽
								</Price>
								<RemoveButton
									onClick={() =>
										handleRemove(product.product)
									}
								>
									Remove
								</RemoveButton>
							</InfoContainer>
						</Product>
					))}
				</Products>
				<Summary>
					<SummaryTitle>Summary</SummaryTitle>
					<SummaryPrice>
						Products total:{" "}
						{cart.products.reduce(
							(partialSum, a) =>
								partialSum + a.product.price * a.quantity,
							0
						)}{" "}
						₽
					</SummaryPrice>
					<SummaryPrice>
						Shipping price:{" "}
						{cart.products.reduce(
							(partialSum, a) =>
								partialSum + a.product.price * a.quantity,
							0
						) *
							0.05 +
							50}{" "}
						₽
					</SummaryPrice>
					<SummaryTotal>
						Total price:{" "}
						{cart.products.reduce(
							(partialSum, a) =>
								partialSum + a.product.price * a.quantity,
							0
						) *
							1.05 +
							50}{" "}
						₽
					</SummaryTotal>
					<BuyButton>Buy</BuyButton>
				</Summary>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Cart;
