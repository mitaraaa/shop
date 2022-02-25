import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	height: 60px;
	background-color: white;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	height: inherit;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
	flex-wrap: wrap;
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 3px;

	${mobile({ display: "none" })}
`;

const Input = styled.input`
	outline: 0;
	border: none;
	margin-left: 5px;
	outline: 0;
	border-bottom: 2px solid lightgray;
`;

const SearchIcon = styled.svg`
	line {
		stroke: lightgray;
	}
	min-width: 24px;
	max-width: 24px;
`;

const ShoppingCartIcon = styled.img`
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

const Logo = styled.h1`
	font-family: "Monotype Old English Text";
	font-size: 36px;
	word-wrap: normal;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	margin: 0;

	${mobile({ "font-size": "28px" })}
`;

const Left = styled.div`
	flex: 1;
	${mobile({ display: "none" })}
`;

const Center = styled.div`
	flex: 2;
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	${mobile({
		"justify-content": "flex-end",
		"padding-right": "30px",
	})}
	gap: 10px;
	flex: 1;
`;

export const Navbar = () => {
	let navigate = useNavigate();
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		if (e.key === "Enter") navigate(`/search/${search}`);
	};

	return (
		<Container>
			<Wrapper>
				<Left></Left>
				<Center>
					<Link
						to="/"
						style={{ color: "black", textDecoration: "none" }}
					>
						<Logo>hikikomori kai</Logo>
					</Link>
				</Center>
				<Right>
					<SearchContainer>
						<SearchIcon
							viewBox="0 0 96 96"
							width="24px"
							height="24px"
						>
							<path d="M55 12C70.9807 12 84 25.0193 84 41C84 56.9807 70.9807 70 55 70C48.0873 70 41.7326 67.5581 36.7422 63.5L17.1211 83.1211C16.8447 83.409 16.5135 83.6389 16.1472 83.7972C15.7808 83.9556 15.3865 84.0392 14.9874 84.0433C14.5882 84.0473 14.1923 83.9717 13.8228 83.8208C13.4533 83.67 13.1176 83.4469 12.8353 83.1647C12.5531 82.8824 12.33 82.5467 12.1792 82.1772C12.0283 81.8077 11.9527 81.4118 11.9567 81.0126C11.9608 80.6135 12.0444 80.2192 12.2028 79.8528C12.3611 79.4865 12.591 79.1553 12.8789 78.8789L32.5 59.2578C28.4419 54.2674 26 47.9127 26 41C26 25.0193 39.0193 12 55 12ZM55 18C42.2619 18 32 28.2619 32 41C32 47.2052 34.4476 52.8114 38.418 56.9414C38.6627 57.1213 38.8787 57.3373 39.0586 57.582C43.1886 61.5524 48.7948 64 55 64C67.7381 64 78 53.7381 78 41C78 28.2619 67.7381 18 55 18Z" />
						</SearchIcon>
						<Input
							placeholder="search"
							onChange={(e) => setSearch(e.target.value)}
							onKeyUp={handleSearch}
						></Input>
					</SearchContainer>
					<Link to="/cart">
						<ShoppingCartIcon src="https://img.icons8.com/fluency-systems-regular/48/000000/shopping-cart.png"></ShoppingCartIcon>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};
