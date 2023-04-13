import { LinkT } from '../models/index';
import Navbar from './Navbar';
import { addRouter } from '../navigate/navigate';
import { subscribeToTheme, ThemeT, getTheme } from '../state/Theme';

export default function App(navLinksP: LinkT[]): void {
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.appendChild(Navbar(navLinksP));
  addRouter(containerDiv);
  const themeDiv = document.createElement('div');
  themeDiv.className = getTheme();
  subscribeToTheme((theme: ThemeT) => {
    themeDiv.className = theme === 'light' ? 'light' : 'dark';
  });
  themeDiv.appendChild(containerDiv);
  appDiv.appendChild(themeDiv);
  document.body.appendChild(appDiv);
}
