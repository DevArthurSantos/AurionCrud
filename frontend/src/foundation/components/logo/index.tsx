import Title, { TitleVariant, TitlehType, TitleWeight } from '@infra/components/typography/title';
import * as S from './styled';

export enum LogoSizing {
	small = "small",
	medium = "medium",
	big = "big",
}

export type LogoProps = {
	sizing?: LogoSizing
}

function Logo({ sizing = LogoSizing.medium }: LogoProps) {
	return (
		<S.Div>
			{sizing === LogoSizing.small ?
				<>
					<Title type={TitlehType.OfCourse} variant={TitleVariant.Small} titleWeight={TitleWeight.Black}><strong>AURION</strong></Title>
					<Title type={TitlehType.Orange} variant={TitleVariant.Small} titleWeight={TitleWeight.Black}><strong>CRUD</strong></Title>
				</>

				: sizing === LogoSizing.medium ?
					<>
						<Title type={TitlehType.OfCourse} variant={TitleVariant.Medium} titleWeight={TitleWeight.Black}><strong>AURION</strong></Title>
						<Title type={TitlehType.Orange} variant={TitleVariant.Medium} titleWeight={TitleWeight.Black}><strong>CRUD</strong></Title>
					</>
					:
					<>
						<Title type={TitlehType.OfCourse} variant={TitleVariant.Large} titleWeight={TitleWeight.Black}><strong>AURION</strong></Title>
						<Title type={TitlehType.Orange} variant={TitleVariant.Large} titleWeight={TitleWeight.Black}><strong>CRUD</strong></Title>
					</>
			}
		</S.Div>
	);
}

export default Logo;