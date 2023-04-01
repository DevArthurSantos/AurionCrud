import styled from 'styled-components';
import { TitleProps } from './index';

export const Title = styled.h1<TitleProps>`
  color: ${(props) =>  props.type};
  font-size: ${(props) => props.variant};

  & strong{
    font-weight: ${(props) => props.titleWeight};
  }
  & span {
    color: ${(props) => props.spanColor};;
  }
`;

export default Title;
