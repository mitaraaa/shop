import styled from "styled-components";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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

const Amount = styled.span`
	color: black;
	width: 30px;
	height: 30px;
	border-radius: 8px;
	border: 2px solid gray;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const ArrowButton = styled.img`
	width: 18px;
	height: 18px;
	cursor: pointer;
`;

const AmountContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id);
				setProduct(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		getProduct();
	}, [id]);

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			if (product.inStock > quantity) setQuantity(quantity + 1);
		}
	};

	const handleClick = () => {
		dispatch(addProduct({ product, quantity }));
	};

	return (
		<Container>
			<Navbar></Navbar>
			<Wrapper>
				<ImageContainer>
					<Image src={product && product.img}></Image>
				</ImageContainer>
				<InfoContainer>
					<Title>{product && product.title}</Title>
					<Price>{product && product.price} ₽</Price>
					<Type>Type: {product && product.types.join(", ")}</Type>
					<InStock>In stock: {product && product.inStock}</InStock>
					<Desc>{product && product.description}</Desc>
					<AmountContainer>
						<ArrowButton
							onClick={() => handleQuantity("dec")}
							src="https://img.icons8.com/fluency-systems-regular/48/000000/minus-math.png"
						></ArrowButton>
						<Amount>{quantity}</Amount>
						<ArrowButton
							onClick={() => handleQuantity("inc")}
							src="https://img.icons8.com/fluency-systems-regular/48/000000/plus-math.png"
						></ArrowButton>
					</AmountContainer>
					<Button
						onClick={handleClick}
						disabled={
							product && product.inStock <= 0 ? true : false
						}
					>
						{product && product.inStock > 0
							? "Add to cart"
							: "Sold out"}
					</Button>
				</InfoContainer>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Product;
