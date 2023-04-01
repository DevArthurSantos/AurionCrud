import styled from "styled-components"
import { IconsButtonsProps } from ".";



export const Div = styled.div<IconsButtonsProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.warp};

  & svg {
    font-size: ${props => props.sizing};
    cursor: pointer;
  }
`;


export const styledsFromExport = { Div };
export default styledsFromExport;