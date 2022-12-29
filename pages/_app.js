import WebLayout from "../layouts/WebLayout";

export default function App({ Component, pageProps }) {
	return (
		<WebLayout>
			<Component {...pageProps} />
		</WebLayout>
	);
}
