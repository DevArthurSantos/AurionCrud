import styled from 'styled-components';
import { ParagraphProps } from './index';



export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.theme.colors['primary']};
  font-size: ${(props) => props.variant};
  & strong{
    font-weight: ${(props) => props.paragraphWeight};
  }
  & i{
    font-style: italic;
  }
  & span {
    color: ${(props) => props.spanColor};;
  }
`;

export default Paragraph;
