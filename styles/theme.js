import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18BABD",
    },
    secondary: {
      main: "#3C4A6D",
    },
    buttonColor: {
      main: "#9C2F86",
    },
  },
  typography: {
    fontFamily: "Roboto, Lato, sans-serif",
  },
});

theme.typography.large = {
  fontWeight: "bold",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};
theme.typography.title = {
  fontWeight: "600",
  color: "#000",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
};

theme.typography.small = {
  fontWeight: "400",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.extraSmall = {
  fontWeight: "400",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
};

theme.typography.normal = {
  fontWeight: "400",
  color: "#000",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
};

theme.typography.aboutNormal = {
  fontWeight: "400",
  color: "#000",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.footerTitle = {
  fontWeight: "600",
  color: "#fff",
  fontSize: "14px",
};
theme.typography.footerContent = {
  fontWeight: "400",
  color: "#fff",
  fontSize: "14px",
};

export default theme;
