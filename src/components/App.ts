import { LinkT, RoutesT } from '../models/index';
import Navbar from './Navbar';
import Route from './Route';
import ThemeDiv from './ThemeDiv';

export default function App(navLinksP: LinkT[], routes: RoutesT): void {
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.appendChild(Navbar(navLinksP));
  containerDiv.appendChild(Route(routes));
  const themeDiv = ThemeDiv();
  themeDiv.appendChild(containerDiv);
  appDiv.appendChild(themeDiv);
  document.body.appendChild(appDiv);
}
