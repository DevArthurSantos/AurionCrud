import { ReactNode } from 'react';
import * as S from './styled';

export enum TitlehType {
  Default = 'rgba(75, 52, 108)',
  OfCourse = 'rgba(112, 87, 148)',
  Orange = 'rgba(240, 120, 120)',
  white = 'rgba(255, 255, 255)',
}

export enum TitleSpanColor {
  Default = 'rgba(75, 52, 108)',
  OfCourse = 'rgba(112, 87, 148)',
  Orange = 'rgba(240, 120, 120)',
  white = 'rgba(255, 255, 255)',
}

export enum TitleVariant {
  Small = '1rem',
  Medium = '2rem',
  Large = '3.5rem',
  Big = '5rem',
}

export enum TitleWeight {
  regular = '400',
  Medium = '500',
  semiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900',
}


export type TitleProps = {
  type?: TitlehType;
  variant?: TitleVariant;
  titleWeight?: TitleWeight;
  spanColor?: TitleSpanColor;
  children: ReactNode;
};

export default function Title({ 
  type = TitlehType.Default, 
  variant = TitleVariant.Small, 
  titleWeight = TitleWeight.regular, 
  spanColor = TitleSpanColor.white,
  children, }: TitleProps) {
  return (
    <S.Title type={type} variant={variant} titleWeight={titleWeight} spanColor={spanColor}>
      {children}
    </S.Title>
  );
}
