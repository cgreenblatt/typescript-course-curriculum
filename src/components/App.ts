import { LinkT } from '../models/index';
import Navbar from './Navbar';
import { addRouter } from '../navigate/navigate';
import ThemedComponent from './ThemedComponent';

export default function App(navLinksP: LinkT[]): void {
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.appendChild(Navbar(navLinksP));
  addRouter(containerDiv);
  const themedDiv = ThemedComponent(containerDiv);
  appDiv.appendChild(themedDiv);
  document.body.appendChild(appDiv);
}
