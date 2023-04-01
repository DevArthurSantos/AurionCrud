import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'

import Header from '@foundation/patterns/header';
import Fotter from '@foundation/patterns/footer';
import dark from '@infra/style/themes/dark';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@infra/style/global';
import Container from './styled';


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const hiddenHeader = router.pathname
	return (
		<>
			<Container >
				<ThemeProvider theme={dark}>
					<GlobalStyle theme={dark} />
					{hiddenHeader === "/docs" ? null : <Header /> }
					<Component {...pageProps} />
					{hiddenHeader === "/docs" ? null : <Fotter /> }
				</ThemeProvider>
			</Container>
		</>
	);
}
