import { Header as HeaderStyled, Div as DivStyled } from './styled';
import NavBar from '../navBar';
import Logo from '@foundation/components/logo';

interface HeaderProps {
  themeHandlerState(): void;
}

export default function Header({ themeHandlerState }: HeaderProps) {
	return (
		<>
			<HeaderStyled>
				<DivStyled>
					<Logo />
				</DivStyled>
        
				<DivStyled>
					<NavBar themeHandlerState={themeHandlerState}/>
				</DivStyled>
			</HeaderStyled>
		</>
	);
}
