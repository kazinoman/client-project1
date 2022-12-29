import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import WebLayout from "../layouts/WebLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </ThemeProvider>
  );
}
