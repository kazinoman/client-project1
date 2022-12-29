import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import { IoLogoAppleAr } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<AppBar
				elevation={3}
				sx={{
					bgcolor: "#fff",
				}}
			>
				<Container
					maxWidth={"lg"}
					disableGutters
				>
					<Toolbar
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Avatar
							sx={{
								bgcolor: "transparent",
								color: "#2e2e2e",
							}}
						>
							<IoLogoAppleAr />
						</Avatar>
						<Hidden smDown>
							<Stack direction={"row"}>
								<Button>Home</Button>
								<Button>About</Button>
								<Button>Contact</Button>
							</Stack>
						</Hidden>
						<Hidden smUp>
							<IconButton
								color={"primary"}
								onClick={handleClick}
							>
								<AiOutlineMenu />
							</IconButton>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								PaperProps={{
									sx: {
										width: "50vw",
										maxWidth: "12rem",
										mt: 2.5,
										overflow: "visible",
										"&:before": {
											content: '""',
											display: "block",
											position: "absolute",
											top: 0,
											right: 30,
											width: 10,
											height: 10,
											bgcolor: "background.paper",
											transform: "translateY(-50%) rotate(45deg)",
											zIndex: 0,
										},
									},
								}}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem onClick={handleClose}>
									<Typography noWrap>Github</Typography>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Typography noWrap>Npm</Typography>
								</MenuItem>
							</Menu>
						</Hidden>
					</Toolbar>
				</Container>
			</AppBar>
			<Box
				sx={{
					mt: { xs: "60px", sm: "70px" },
				}}
			/>
		</>
	);
};

export default Header;
