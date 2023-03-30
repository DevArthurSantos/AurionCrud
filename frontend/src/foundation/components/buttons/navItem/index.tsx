import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { NavItem as NavItemStyled } from './styled';

type NavItemProps = {
  children: ReactNode,
  href: string,
  NavItemListRef: any
}

function NavItem({ children, href, NavItemListRef}: NavItemProps) {
	const refButton = useRef<any>(null);
	const [state, setState] = useState(false);

	useEffect(()=> {
		const list = [...NavItemListRef.current.children];

		function handlerActive() {
			list.forEach(child => {
				child.classList.remove('active');
			});
			refButton.current.classList.add('active');
		}handlerActive();
	},[state, NavItemListRef]);

  


	return (
		<NavItemStyled onClick={() => {setState(!state);}} ref={refButton} className={children === 'HOME' ? 'active' : ''}>
			<Link href={`/${href.toLowerCase()}`}>{children}</Link>
		</NavItemStyled>
	);
}

export default NavItem;