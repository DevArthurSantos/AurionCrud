import NavItem from '@foundation/components/buttons/navItem';
import ThemeHandler from '@foundation/components//buttons/themeHandler';
import { useRef } from 'react';
import Div from './styled';

type NavBarProps = {
  themeHandlerState(): void;
}


function NavBar({ themeHandlerState }: NavBarProps) {

	const NavItemListRef = useRef(null);


	return (
		<Div ref={NavItemListRef}>
			<NavItem href="home" NavItemListRef={NavItemListRef}>HOME</NavItem>
			<NavItem href="dashboard" NavItemListRef={NavItemListRef}>DASHBOARD</NavItem>
			<NavItem href="docs" NavItemListRef={NavItemListRef}>DOCS</NavItem>
			<NavItem href="singin" NavItemListRef={NavItemListRef}>SING IN</NavItem>
			<ThemeHandler themeHandlerState={themeHandlerState} />
		</Div>
	);
}

export default NavBar;