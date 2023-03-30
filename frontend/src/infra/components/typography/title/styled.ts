"use client";
import styled from "styled-components";

export const TypeSmallV1 = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
`;
export const TypeMediumV1 = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;
export const TypeBigV1 = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
`;
export const TypeSmallV2 = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
`;
export const TypeMediumV2 = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
`;
export const TypeBigV2 = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
`;

export default { TypeSmallV1, TypeMediumV1, TypeBigV1, TypeSmallV2, TypeMediumV2, TypeBigV2 };
