import styled from "styled-components";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "0px", "flex-direction": "column" })}
`;

const ImageContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	margin-top: 50px;
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "20px", "margin-top": "10px" })}
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 42px;
	margin: 0;
`;

const Type = styled.p`
	color: gray;
	margin-bottom: 2px;
`;

const InStock = styled.p`
	color: gray;
	margin: 0;
`;

const Desc = styled.p`
	font-size: 24px;
	margin: 0;
	margin-bottom: 20px;
	margin-top: 20px;
`;

const Price = styled.span`
	font-weight: 300;
	font-size: 36px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid black;
	border-radius: 2px;
	min-width: 200px;
	background-color: white;
	font-size: 18px;
	color: black;
	font-weight: 500;
	&:not([disabled]) {
		cursor: pointer;
	}

	transition: 200ms;

	&:hover:not([disabled]) {
		background-color: black;
		color: white;
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Navbar></Navbar>
			<Wrapper>
				<ImageContainer>
					<Image src={item.src}></Image>
				</ImageContainer>
				<InfoContainer>
					<Title>{item.itemName}</Title>
					<Price>{item.price} ₽</Price>
					<Type>Type: {item.type.join(", ")}</Type>
					<InStock>In stock: {item.quantity}</InStock>
					<Desc>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Praesentium consequuntur omnis dignissimos
						quibusdam laudantium, laboriosam architecto alias odio
						nihil delectus quos vel voluptates voluptate unde
						accusantium nam veritatis eum repellendus.
					</Desc>
					<Button disabled={item.quantity <= 0 ? true : false}>
						{item.quantity > 0 ? "Add to cart" : "Sold out"}
					</Button>
				</InfoContainer>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Product;
