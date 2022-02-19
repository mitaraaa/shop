import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

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
	${mobile({ "flex-direction": "column" })}
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

const Amount = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 18px;
	margin: 0px 10px;
`;

const Price = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 24px;
`;

const ArrowButton = styled.img`
	width: 16px;
	height: 16px;
	cursor: pointer;
`;

const AmountContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
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
	return (
		<Container>
			<Navbar></Navbar>
			<Title>Shopping cart</Title>
			<Wrapper>
				<Products>
					<Product>
						<ImageContainer>
							<Image src="https://sun9-18.userapi.com/impg/uKfBfz-VBkNJyv-5b4HJsE35wsZEX-xsOr7VjA/sqniang1Xgo.jpg?size=1550x1475&quality=96&sign=38cd3aecbaded6c02633e1e6fb1ff92a&type=album"></Image>
						</ImageContainer>
						<InfoContainer>
							<LeftInfo>
								<Name>bebra cloat</Name>
								<AmountContainer>
									<AmountText>Amount: </AmountText>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/minus-math.png"></ArrowButton>
									<Amount>1</Amount>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/plus-math.png"></ArrowButton>
								</AmountContainer>
							</LeftInfo>
							<Price>3990 P</Price>
							<RemoveButton>Remove</RemoveButton>
						</InfoContainer>
					</Product>

					<Product>
						<ImageContainer>
							<Image src="https://sun9-18.userapi.com/impg/uKfBfz-VBkNJyv-5b4HJsE35wsZEX-xsOr7VjA/sqniang1Xgo.jpg?size=1550x1475&quality=96&sign=38cd3aecbaded6c02633e1e6fb1ff92a&type=album"></Image>
						</ImageContainer>
						<InfoContainer>
							<LeftInfo>
								<Name>bebra cloat</Name>
								<AmountContainer>
									<AmountText>Amount: </AmountText>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/minus-math.png"></ArrowButton>
									<Amount>1</Amount>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/plus-math.png"></ArrowButton>
								</AmountContainer>
							</LeftInfo>
							<Price>3990 P</Price>
							<RemoveButton>Remove</RemoveButton>
						</InfoContainer>
					</Product>

					<Product>
						<ImageContainer>
							<Image src="https://sun9-18.userapi.com/impg/uKfBfz-VBkNJyv-5b4HJsE35wsZEX-xsOr7VjA/sqniang1Xgo.jpg?size=1550x1475&quality=96&sign=38cd3aecbaded6c02633e1e6fb1ff92a&type=album"></Image>
						</ImageContainer>
						<InfoContainer>
							<LeftInfo>
								<Name>bebra cloat</Name>
								<AmountContainer>
									<AmountText>Amount: </AmountText>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/minus-math.png"></ArrowButton>
									<Amount>1</Amount>
									<ArrowButton src="https://img.icons8.com/fluency-systems-regular/24/000000/plus-math.png"></ArrowButton>
								</AmountContainer>
							</LeftInfo>
							<Price>3990 P</Price>
							<RemoveButton>Remove</RemoveButton>
						</InfoContainer>
					</Product>
				</Products>
				<Summary>
					<SummaryTitle>Summary</SummaryTitle>
					<SummaryPrice>Products total: 3990 P</SummaryPrice>
					<SummaryPrice>Shipping price: 690 P</SummaryPrice>
					<SummaryTotal>Total price: 4980 P</SummaryTotal>
					<BuyButton>Buy</BuyButton>
				</Summary>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Cart;
