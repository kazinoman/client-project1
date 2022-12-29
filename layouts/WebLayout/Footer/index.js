import { Container, Paper } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Paper
			elevation={10}
			sx={{
				pt: 2,
				flexGrow: 1,
			}}
		>
			<Container maxWidth={"lg"}>Footer Here</Container>
		</Paper>
	);
};

export default Footer;
