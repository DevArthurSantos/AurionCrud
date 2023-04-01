import styled from "styled-components";
import background from "@public/imgs/background2.png"

export const Section = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background: linear-gradient(180deg, #D4D5DB 0%, rgba(236, 239, 255, 0) 100%);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  z-index: 2;
  gap: 1.5rem;
`;
export const ContainerToken = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  position: relative;
  z-index: 2;
  gap: 1.5rem;
  padding: 4rem 0;
  & div:nth-child(1) {
    z-index: 2;
    width: 85%;
  }
  & div:nth-child(2) {
    width: 11rem;
    position: absolute;
    right: 0;
    z-index: 3;
  }
  & div {
    position: absolute;
    text-align: right;
    & svg {
      font-size: 2.7rem;
      margin: 0 1rem 3rem 0;
      padding: .6rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
    & svg:last-child {
      margin: 0 0 3rem 0;
    }
  }
`;

export const TokenInput = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  font-size: 2.2rem;
  color: ${props => props.theme.colors.textDarker};
  background: transparent;
    &::placeholder{
      color: ${props => props.theme.colors.textDarker};
    }
`;

export const GetStarted = styled.button`
  width: 13.6rem;
  height: 3.9rem;
  background: #F07878;
  border: 0;
  border-radius: 100px;
`;

export const styledsFromExport = { Section, Container, TokenInput, GetStarted, ContainerToken };
export default styledsFromExport;