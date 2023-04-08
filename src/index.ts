import './styles/styles.css';
import NewPosts from './components/NewPosts';
import TopPosts from './components/TopPosts';
import Navbar from './components/Navbar';
import ThemedComponent from './components/ThemedComponent';
import User from './components/User';
import Post from './components/Post';
import { addRouter, navigate } from './navigate/navigate';

const routes = [
  {
    pathRegExp: RegExp(/^\/$/),
    callback: TopPosts,
  },
  {
    pathRegExp: RegExp(/^\/new$/),
    callback: NewPosts,
  },
  {
    pathRegExp: RegExp(/^\/user$/),
    callback: User,
    searchParams: ['id'],
  },
  {
    pathRegExp: RegExp(/^\/post$/),
    callback: Post,
    searchParams: ['id'],
  },
];

const navLinks = [
  {
    path: '/',
    text: 'Top',
  },
  {
    path: '/new',
    text: 'New',
  },
];

const appDiv = document.createElement('div');
appDiv.id = 'app';
const containerDiv = document.createElement('div');
containerDiv.className = 'container';
containerDiv.appendChild(Navbar(navLinks));
addRouter(containerDiv, routes);
const themedDiv = ThemedComponent(containerDiv);
appDiv.appendChild(themedDiv);
document.body.appendChild(appDiv);
window.addEventListener('popstate', navigate);

navigate();
