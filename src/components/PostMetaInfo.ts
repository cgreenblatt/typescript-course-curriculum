import { PostMetaInfoT } from '../models/api';
import { formatDate } from '../utils/helpers';
import Link from './Link';
import { subscribeToTheme, ThemeT, getTheme } from '../state/themeState';
export default function PostMetaInfo({
  by,
  time,
  id,
  descendants,
}: PostMetaInfoT): HTMLDivElement {
  const postMetaInfoDiv = document.createElement('div');
  const theme = getTheme();
  postMetaInfoDiv.className = `meta-info-${
    theme === 'light' ? 'light' : 'dark'
  }`;

  const bySpan = document.createElement('span');
  bySpan.textContent = 'by ';
  const byLink = Link(by, `/user?id=${by}`);
  bySpan.appendChild(byLink);
  postMetaInfoDiv.appendChild(bySpan);

  const onSpan = document.createElement('span');
  onSpan.textContent = `on ${formatDate(time)}`;
  postMetaInfoDiv.appendChild(onSpan);

  if (descendants) {
    const descSpan = document.createElement('span');
    descSpan.appendChild(document.createTextNode('with '));
    const descLink = Link(descendants.toString(), `/post?id=${id}`);
    descSpan.appendChild(descLink);
    descSpan.appendChild(document.createTextNode(' comments'));
    postMetaInfoDiv.appendChild(descSpan);
  }
  subscribeToTheme((theme: ThemeT) => {
    const className = `meta-info-${theme === 'light' ? 'light' : 'dark'}`;
    postMetaInfoDiv.className = className;
  });
  return postMetaInfoDiv;
}
