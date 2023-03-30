import { ReactNode } from 'react';
import { Paragraph as ParagraphStyled } from './styled';

export enum ParagraphType {
  Default = 'default',
  Darker = 'darker',
  Orange = 'orange',
}

export enum ParagraphVariant {
  Small = '.5rem',
  Medium = '1.2rem',
  Large = '2.5rem',
}

export type ParagraphProps = {
  type?: ParagraphType;
  variant?: ParagraphVariant;
  children: ReactNode;
};

export default function Paragraph({
	type = ParagraphType.Default,
	variant = ParagraphVariant.Small,
	children,
}: ParagraphProps) {
	return (
		<ParagraphStyled type={type} variant={variant}>
			{children}
		</ParagraphStyled>
	);
}
