import React from "react";
import { Container, Stack, ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

const WebLayout = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Stack
					direction={"column"}
					sx={{
						height: "100vh",
						overflow: "hidden",
						overflowY: "auto",
					}}
				>
					<Header />
					<Container
						maxWidth={"lg"}
						sx={{
							px: { xs: 0, sm: 2 },
							minHeight: "70vh",
						}}
					>
						{children}
					</Container>
					<Footer />
				</Stack>
			</ThemeProvider>
		</>
	);
};

export default WebLayout;
