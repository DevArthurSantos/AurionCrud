import Image from 'next/image';
import avatar from '@imgs/test.svg';

import * as S from './styled';
import Title, { TitlehType, TitleVariant } from '@infra/components/typography/title';
import Logo from '@foundation/components/logo';
import Paragraph, { ParagraphType, ParagraphVariant } from '@infra/components/typography/paragraph';


export default function Home() {
	return (
		<S.ContainerMain>
			<S.ContainerText>
				<div>
					<S.WelComeTitle>
						<Title type={TitlehType.Darker} variant={TitleVariant.Large}>Welcome to</Title>
						<Logo />
						<Title type={TitlehType.Orange} variant={TitleVariant.Medium}>your dynamic website builder!</Title>
					</S.WelComeTitle>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
					<Paragraph type={ParagraphType.Default} variant={ParagraphVariant.Medium}>
            With our user-friendly platform, you can create a professional website in a matter of minutes, without needing to be an expert in programming. We offer a wide variety of modern and customizable components so you can create a website that represents your brand.
					</Paragraph>

					<Paragraph type={ParagraphType.Default} variant={ParagraphVariant.Medium}>
            Our extensive library of images and icons can be easily accessed to add a touch of style and personality to your site.
					</Paragraph>
				</div>

			</S.ContainerText>
			<S.ContainerSvg>
				<Image alt='teste' src={avatar} width="600" />
			</S.ContainerSvg>
		</S.ContainerMain>
	);
}
