import Paragraph, { ParagraphType, ParagraphVariant, ParagraphWeight } from "@/infra/components/typography/paragraph";
import Title, { TitleSpanColor, TitlehType, TitleVariant, TitleWeight } from "@/infra/components/typography/title";
import useGetIp from "@/infra/utils/Hooks/useGetIp";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { GrCopy, GrSearch } from "react-icons/gr"

type createUserToken = {
  token: string
}

export function HomeSection() {
  const inputTokenRef = useRef<HTMLInputElement>(null)
  const userIp = useGetIp();
  const [data, setData] = useState<createUserToken>();
  
  useEffect(() => {
    if(!userIp) return
    try{
      async function fetchData() {
        const response = await axios.get<createUserToken>(`/api/customer/new/${userIp}`);
        setData(response.data);
      }
      fetchData();
    } catch (e){

    }
  }, [userIp]);



  useEffect(() => {
    if (inputTokenRef.current && data) {
      inputTokenRef.current.value = data.token;
    }
  }, [data, inputTokenRef]);

  return (
    <S.Section>
      <S.Container>
        <div style={{ display: "flex", gap: "10px" }}>
          <Title titleWeight={TitleWeight.Black} type={TitlehType.Default} variant={TitleVariant.Big} spanColor={TitleSpanColor.Default}>
            Crie, leia, atualize e exclua o que quiser!
          </Title>
        </div>
        <S.ContainerToken>
          <div>
            <S.TokenInput  />
          </div>
          <div>
            <GrSearch />
            <GrCopy />
          </div>
        </S.ContainerToken>
        <Paragraph variant={ParagraphVariant.Medium} paragraphWeight={ParagraphWeight.Bold} type={ParagraphType.Orange} > Crie aplicativos da Web ou móveis executando operações crud. </Paragraph>
        <S.GetStarted>Get Started</S.GetStarted>
      </S.Container>
    </S.Section>
  )

}

export default HomeSection