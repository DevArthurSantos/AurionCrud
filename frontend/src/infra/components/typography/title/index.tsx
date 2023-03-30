import { ReactNode } from 'react';
import { Title as TitleStyled } from './styled';

export enum TitlehType {
  Default = 'rgba(112, 87, 148, 1)',
  Darker = 'rgba(75, 52, 108, 1)',
  Orange = 'rgba(240, 120, 120, 1)',
}

export enum TitleVariant {
  Small = '.8rem',
  Medium = '1.3rem',
  Large = '2.2rem',
}


export type TitleProps = { 
  type?: TitlehType;
  variant?: TitleVariant;
  children: ReactNode;
};

export default function Title({ type = TitlehType.Default, variant = TitleVariant.Small, children, }: TitleProps) {
	return (
		<TitleStyled type={type} variant={variant}>
			{children}
		</TitleStyled>
	);
}
