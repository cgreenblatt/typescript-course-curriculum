import { PostMetaInfoT } from '../models/api';
import { formatDate } from '../utils/helpers';

export default function PostMetaInfoComp({
  by,
  time,
  id,
  descendants,
}: PostMetaInfoT): HTMLDivElement {
  const postMetaInfoDiv = document.createElement('div');
  postMetaInfoDiv.className = `meta-info-light`;

  const bySpan = document.createElement('span');
  bySpan.textContent = 'by ';
  const byAnchor = document.createElement('a');
  byAnchor.href = '#';
  byAnchor.textContent = by;
  bySpan.appendChild(byAnchor);
  postMetaInfoDiv.appendChild(bySpan);

  const onSpan = document.createElement('span');
  onSpan.textContent = `on ${formatDate(time)}`;
  postMetaInfoDiv.appendChild(onSpan);

  if (descendants) {
    const descSpan = document.createElement('span');
    descSpan.appendChild(document.createTextNode('with '));
    const descAnchor = document.createElement('a');
    descAnchor.href = '#';
    descAnchor.textContent = descendants.toString();
    descSpan.appendChild(descAnchor);
    descSpan.appendChild(document.createTextNode(' comments'));
    postMetaInfoDiv.appendChild(descSpan);
  }
  return postMetaInfoDiv;
}
