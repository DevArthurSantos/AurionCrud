
import { parseCookies } from 'nookies';
import { useEffect, useRef, useState } from 'react';
import Button from './styled';

interface ThemeHandlerProps {
  themeHandlerState(): void
}

export default function ThemeHandler({ themeHandlerState }: ThemeHandlerProps) {

	const buttonRef = useRef<any>(null);
	const [verifiTheme, setVerifiTheme] = useState(false);

	useEffect(() => {
		const theme = parseCookies()['theme'];
		const obj = theme ? JSON.parse(theme).icon : '🌙';
		buttonRef.current.innerText = obj;
	}, [verifiTheme]);

	return (
		<Button ref={buttonRef} onClick={() => {
			setVerifiTheme(!verifiTheme);
			themeHandlerState();
		}}>
		</Button>
	);
}
