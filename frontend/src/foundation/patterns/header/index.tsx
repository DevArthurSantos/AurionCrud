import { Header as HeaderStyled, Div as DivStyled } from './styled';
import NavBar from '../navBar';
import Logo from '@foundation/components/logo';


export default function Header() {
	return (
		<>
			<HeaderStyled>
				<DivStyled>
					<Logo />
				</DivStyled>
        
				<DivStyled>
					<NavBar />
				</DivStyled>
			</HeaderStyled>
		</>
	);
}
