import NavItem from '@foundation/components/buttons/navItem';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Div from './styled';

function NavBar() {
	const PagesItems = ["HOME", "DASHBOARD", "DOCS"]
	const NavItemListRef = useRef<any>(null);
	const refButton = useRef<any>(null);
	const router = useRouter()
	const [active, setActive] = useState<any>("HOME");

	useEffect(() => {
		const list = [...NavItemListRef?.current.children];
		list.forEach(child => {
			child.classList.remove('active')
			child.innerText === active ? child.classList.add('active') : ""
		});
	}, [active])


	useEffect(() => {
		let activeRoute = router.pathname.replace("/", "").toUpperCase()
		setActive(activeRoute === "" ? "HOME" : activeRoute)
		if (activeRoute === "DASHBOARD") {
			let link = document.createElement("a");
			link.download = "README.MD";
			link.href = "https://download1072.mediafire.com/ahxmmgaalsjgpO57NZXAKLitm61dkbD3xQqECYGSnxPHOqx6tvpYwrv-xEeoZBqTLVgAxT1XFqLHobcAmpSZj1wc75w/joflkd7zm980318/README.md";
			link.click();
		}
	}, [router])


	return (
		<Div ref={NavItemListRef}>
			{PagesItems.map((page) => {
				return (
					<NavItem key={page} href={page}>{page.toUpperCase()}</NavItem>)
			}
			)}
		</Div>
	);
}
export default NavBar;