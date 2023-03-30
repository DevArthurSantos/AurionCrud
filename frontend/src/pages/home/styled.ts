import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 8rem;
  height: 100%;
`;

export const ContainerText = styled.div`
  max-width: 30rem;
`;
export const ContainerSvg = styled.div`
`;
export const WelComeTitle = styled.div`
  display: flex;
  gap: 5px;
  width: fit-content;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px;
  & h1:nth-child(3){
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;


const styedsFromExport = { ContainerMain, ContainerText, ContainerSvg, WelComeTitle };
export default styedsFromExport;