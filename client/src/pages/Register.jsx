import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	height: 95vh;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
`;

const RegisterForm = styled.div`
	width: 300px;
	height: 300px;
	border: 2px solid lightgray;
	border-radius: 14px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 50px;
	${mobile({
		padding: "20px",
		height: "400px",
		"justify-content": "center",
		border: "hidden",
	})}
`;

const Title = styled.h1`
	text-align: left;
	font-size: 36px;
	color: black;
	margin: 0 0 20px 0;
`;

const Input = styled.input`
	height: 50px;
	border: none;
	outline: 0;
	border-bottom: 2px solid;
	font-size: 18px;
	margin-bottom: 20px;
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

const Register = () => {
	return (
		<Container>
			<Navbar></Navbar>
			<Wrapper>
				<RegisterForm>
					<Title>Register</Title>
					<Input placeholder="Username"></Input>
					<Input placeholder="Password" type="password"></Input>
					<Button>Register</Button>
				</RegisterForm>
			</Wrapper>
		</Container>
	);
};

export default Register;
