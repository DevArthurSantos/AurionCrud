import Title, { TitleVariant, TitlehType } from '@infra/components/typography/title';
import { Div as DivStyled } from './styled';

function Logo() {
	return (
		<DivStyled>
			<Title type={TitlehType.Darker} variant={TitleVariant.Large}><strong>AURION</strong></Title>
			<Title type={TitlehType.Orange} variant={TitleVariant.Large}><strong>MAKER</strong></Title>
		</DivStyled>


	);
}

export default Logo;