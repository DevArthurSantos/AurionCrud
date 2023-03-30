'use client';
import styled from 'styled-components';
import { TitleProps } from './index';

export const Title = styled.h1<TitleProps>`
  color: ${(props) =>  props.type};
  font-size: ${(props) => props.variant};

  & + & strong{
    font-weight: bold;
  }
`;

export default Title;
