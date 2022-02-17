import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 500;
	font-size: 42px;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar></Navbar>

			<Footer></Footer>
		</Container>
	);
};

export default Cart;
