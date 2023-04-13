import ThemeButton from './ThemeButton';
import Link from './Link';
import { LinkT } from '../models/index';

export default function Navbar(links: LinkT[]): HTMLElement {
  const anchorLinks: HTMLAnchorElement[] = [];
  const navbarNav = document.createElement('nav');
  navbarNav.className = 'row space-between';
  const navbarUl = document.createElement('ul');
  navbarUl.className = 'row nav';
  navbarUl.addEventListener('click', (e) => {
    if (e.target && e.target instanceof HTMLAnchorElement) {
      for (const a of anchorLinks) {
        a.className = a === e.target ? 'nav-link nav-link--color' : 'nav-link';
      }
    }
  });
  for (const { text, path } of links) {
    const navbarLi = document.createElement('li');
    const className = `nav-link ${
      window.location.pathname === path ? 'nav-link--color' : ''
    }`;
    const link = Link(text, path, className);
    anchorLinks.push(link);
    navbarLi.appendChild(link);
    navbarUl.appendChild(navbarLi);
  }
  navbarNav.appendChild(navbarUl);
  navbarNav.appendChild(ThemeButton());
  return navbarNav;
}
