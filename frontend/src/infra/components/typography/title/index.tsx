import { ReactNode } from "react";
import {TypeSmallV1, TypeMediumV1, TypeBigV1, TypeSmallV2, TypeMediumV2, TypeBigV2} from "./styled";

interface TitleProps {
  type: string;
  variante: string;
  children: ReactNode;
}

export default function Title({ type, variante, children }: TitleProps) {
  const v1: any = {
    Small: TypeSmallV1,
    Medium: TypeMediumV1,
    Big: TypeBigV1,
  };

  const v2: any = {
    Small: TypeSmallV2,
    Medium: TypeMediumV2,
    Big: TypeBigV2,
  };
  
  const Component =  variante === "1" ? v1[type] : v2[type];
  return <Component>{children}</Component>;
}