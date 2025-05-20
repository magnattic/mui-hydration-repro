import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";

export default function App({ Component, pageProps, ...props }) {
	return (
		<AppCacheProvider {...props}>
			<Component {...pageProps} />
		</AppCacheProvider>
	);
}
