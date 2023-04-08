import ThemeButton from './ThemeButton';
import Link from './Link';

interface LinkType {
  text: string;
  path: string;
}

export default function Navbar(links: LinkType[]): HTMLElement {
  const navbarNav = document.createElement('nav');
  navbarNav.className = 'row space-between';
  const navbarUl = document.createElement('ul');
  navbarUl.className = 'row nav';
  for (const { text, path } of links) {
    const navbarLi = document.createElement('li');
    const link = Link(text, path);
    navbarLi.appendChild(link);
    navbarUl.appendChild(navbarLi);
  }
  navbarNav.appendChild(navbarUl);
  navbarNav.appendChild(ThemeButton());
  return navbarNav;
}
