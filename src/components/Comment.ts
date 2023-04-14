import PostMetaInfo from './PostMetaInfo';
import { CommentT } from '../models/api';

export default function Comment(post: CommentT): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'comment';
  div.appendChild(PostMetaInfo(post));
  const p = document.createElement('p');
  p.innerHTML = post.text;
  div.appendChild(p);
  return div;
}
