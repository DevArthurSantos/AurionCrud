'use client';
import styled from 'styled-components';
import { ParagraphProps } from './index';



export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) =>  props.theme.colors['primary']};
  font-size: ${(props) => props.variant};

 & + & strong{
    font-weight: bold;
  }
 & + & i{
    font-style: italic;
  }
`;

export default Paragraph;
