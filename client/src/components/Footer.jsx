import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 50px;
	margin-bottom: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Link = styled.a`
	font-size: 18px;
	text-align: center;
	color: lightgray;
	cursor: pointer;
	transition: 200ms;

	&:hover {
		color: black;
	}
`;

const Footer = () => {
	return (
		<Container>
			<Link href="https://www.instagram.com/juzacxz/">
				https://www.instagram.com/juzacxz/
			</Link>
		</Container>
	);
};

export default Footer;
