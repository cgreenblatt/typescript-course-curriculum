import { CommentT, PostT } from '../models/api';
import PostMetaInfo from './PostMetaInfo';
import Comment from './Comment';

export default function Post({
  post,
  comments,
}: {
  post: PostT;
  comments: CommentT[];
}): HTMLElement {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.className = 'header';
  const titleAnchor = document.createElement('a');
  titleAnchor.textContent = post.title;
  titleAnchor.className = 'link';
  h1.appendChild(titleAnchor);
  div.appendChild(h1);
  const postMetaInfo = PostMetaInfo(post);
  postMetaInfo.style.marginBottom = '16px';
  div.appendChild(postMetaInfo);
  for (const comment of comments) {
    div.appendChild(Comment(comment));
  }
  return div;
}
