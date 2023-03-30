
import { parseCookies } from 'nookies';
import { useEffect, useRef, useState } from 'react';
import Button from './styled';

interface LangHandlerProps {
  langHandler(): void
}

export default function LangHandler({ langHandler }: LangHandlerProps) {

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
			langHandler();
		}}>
		</Button>
	);
}
