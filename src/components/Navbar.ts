import ThemeButton from './ThemeButton';
import Link from './Link';
import { LinkT } from '../models/index';
import { subscribeToPath } from '../state/pathState';

export default function Navbar(links: LinkT[]): HTMLElement {
  const anchorLinks: { linkEl: HTMLAnchorElement; path: string }[] = [];
  const navbarNav = document.createElement('nav');
  navbarNav.className = 'row space-between';
  const navbarUl = document.createElement('ul');
  navbarUl.className = 'row nav';

  for (const { text, path } of links) {
    const navbarLi = document.createElement('li');
    const className = `nav-link ${
      window.location.pathname === path ? 'nav-link--color' : ''
    }`;
    const link = Link(text, path, className);
    anchorLinks.push({ linkEl: link, path });
    navbarLi.appendChild(link);
    navbarUl.appendChild(navbarLi);
  }
  subscribeToPath((pathP) => {
    for (const { linkEl, path } of anchorLinks) {
      linkEl.className =
        path === pathP ? 'nav-link nav-link--color' : 'nav-link';
    }
  });
  navbarNav.appendChild(navbarUl);
  navbarNav.appendChild(ThemeButton());
  return navbarNav;
}
