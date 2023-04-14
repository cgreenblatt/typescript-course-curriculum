import { UserResponseT } from '../models/index';
import { UserT } from '../models/api';
import { formatDate } from '../utils/helpers';
import Posts from './Posts';

function userMetaInfo(user: UserT): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'meta-info-light';
  const joinedSpan = document.createElement('span');
  joinedSpan.className = 'bold';
  joinedSpan.textContent = formatDate(user.created);
  div.appendChild(joinedSpan);
  div.appendChild(document.createTextNode('has '));
  if (user.karma) {
    const karmaSpan = document.createElement('span');
    karmaSpan.className = 'bold';
    karmaSpan.textContent = user.karma.toLocaleString();
    div.appendChild(karmaSpan);
    div.appendChild(document.createTextNode('karma'));
  }
  return div;
}

export default function User(userData: UserResponseT): HTMLDivElement {
  const { user, posts } = userData;
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.className = 'header';
  h1.textContent = user.id;
  div.appendChild(h1);
  div.appendChild(userMetaInfo(user));
  if (user.about) {
    const p = document.createElement('p');
    p.innerHTML = user.about;
    div.appendChild(p);
  }
  const h2 = document.createElement('h2');
  h2.textContent = 'Posts';
  div.appendChild(h2);
  div.appendChild(Posts(posts));
  return div;
}
