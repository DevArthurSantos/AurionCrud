import Link from 'next/link';
import { ReactNode } from 'react';
import { NavItem as NavItemStyled } from './styled';

type NavItemProps = {
	children: ReactNode,
	href: string,
}

function NavItem({ children, href }: NavItemProps) {

	return (
		<NavItemStyled>
			<Link href={children === "HOME" ? "/" : `/${href.toLowerCase()}`} >{children}</Link>
		</NavItemStyled>
	);
}

export default NavItem;