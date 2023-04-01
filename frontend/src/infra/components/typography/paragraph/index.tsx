import { ReactNode } from 'react';
import * as S from './styled';

export enum ParagraphType {
  Default = 'default',
  Darker = 'darker',
  Orange = 'orange',
}

export enum ParagraphSpanColor {
  Default = 'rgba(75, 52, 108)',
  OfCourse = 'rgba(112, 87, 148)',
  Orange = 'rgba(240, 120, 120)',
  white = 'rgba(255, 255, 255)',
}

export enum ParagraphVariant {
  Small = '.5rem',
  SmallPlus = '1.5rem',
  Medium = '2rem',
  MediumPlus = '2.5rem',
  Large = '3rem',
  LargePlus = '3.5rem',
}

export type ParagraphProps = {
  type?: ParagraphType;
  variant?: ParagraphVariant;
  paragraphWeight?: ParagraphWeight;
  spanColor?: ParagraphSpanColor;
  children: ReactNode;
};

export enum ParagraphWeight {
  regular = '400',
  Medium = '500',
  semiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900',
}

export default function Paragraph({
	type = ParagraphType.Default,
	variant = ParagraphVariant.Small,
  paragraphWeight = ParagraphWeight.regular,
  spanColor = ParagraphSpanColor.white,
	children,
}: ParagraphProps) {
	return (
		<S.Paragraph type={type} variant={variant} paragraphWeight={paragraphWeight} spanColor={spanColor}>
			{children}
		</S.Paragraph>
	);
}
