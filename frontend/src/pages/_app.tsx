import type { AppProps } from 'next/app';


import Header from '@foundation/patterns/header';
import Fotter from '@foundation/patterns/footer';
import light from '@infra/style/themes/light';
import dark from '@infra/style/themes/dark';
import usePersistedState from '@infra/utils/Hooks/userPersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '@infra/style/global';
import { Poppins } from 'next/font/google';
import Container from './styled';

const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

	function themeHandlerState() {
		setTheme(theme === dark ? light : dark);
	}

	return (
		<Container className={poppins.className} >
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<Header themeHandlerState={themeHandlerState} />
				<Component {...pageProps} />
				<Fotter />
			</ThemeProvider>
		</Container>
	);
}
