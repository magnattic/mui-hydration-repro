import { Html, Head, Main, NextScript } from "next/document";
import {
	DocumentHeadTags,
	createEmotionCache,
	documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";

export default function Document(props) {
	return (
		<Html lang="en">
			<Head>
				<DocumentHeadTags {...props} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (ctx) => {
	const finalProps = await documentGetInitialProps(ctx, {
		emotionCache: createEmotionCache({ enableCssLayer: true }),
	});
	return finalProps;
};
