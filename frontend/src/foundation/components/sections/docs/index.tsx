import { useRouter } from "next/router";
import { FaGlobe } from "react-icons/fa"
import { SiDiscord, SiGithub } from "react-icons/si"

import IconsButtons, { IconsOptionDirection, IconsOptionSizing } from "@/foundation/components/buttons/iconsButtons";
import Logo from "@/foundation/components/logo";
import Paragraph, { ParagraphSpanColor, ParagraphType, ParagraphVariant, ParagraphWeight } from "@/infra/components/typography/paragraph";
import * as S from "./styled"

function DocsSection() {
	const router = useRouter();

	function discordClick() {
		window.open("https://discord.gg/BPwWTdGNu3");
	}
	function siteClick() {
		router.push("/")
	}
	function gitHubClick() {
		window.open("https://github.com/AurionGroup");
	}

	return (
		<>
			<S.Container>
				<S.Header>
					<article>
						<Logo />
						<div>
							<IconsButtons sizing={IconsOptionSizing.smallPlus} direction={IconsOptionDirection.row}>
								<SiGithub color="white" onClick={gitHubClick} />
								<FaGlobe color="white" onClick={siteClick} />
								<SiDiscord color="white" onClick={discordClick} />
							</IconsButtons>
						</div>
					</article>
				</S.Header>
				<S.NavBar>n</S.NavBar>
				<S.Content></S.Content>
				<S.Indexs>i</S.Indexs>
				<S.Footer>
					<article>
						<IconsButtons sizing={IconsOptionSizing.smallPlus} direction={IconsOptionDirection.row}>
							<SiGithub color="white" onClick={gitHubClick} />
							<FaGlobe color="white" onClick={siteClick} />
							<SiDiscord color="white" onClick={discordClick} />
						</IconsButtons>
						<div>
							<Paragraph paragraphWeight={ParagraphWeight.ExtraBold} type={ParagraphType.Darker} variant={ParagraphVariant.SmallPlus} spanColor={ParagraphSpanColor.Orange} > Copyright © 2023 MIT by <span>AurionGrup</span></Paragraph>
						</div>
					</article>

				</S.Footer>
			</S.Container>
		</>
	);
}

export default DocsSection