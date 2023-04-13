import { PostsResponseT } from '../models/index';
import PostMetaInfo from './PostMetaInfo';

export default function Posts(posts: PostsResponseT): HTMLElement {
  const postList = document.createElement('ul');
  posts.forEach((post) => {
    const postItem = document.createElement('li');
    postItem.className = 'post';
    const anchor = document.createElement('a');
    anchor.className = 'link';
    anchor.href = post.url;
    anchor.textContent = post.title;
    postItem.appendChild(anchor);
    postItem.appendChild(PostMetaInfo(post));
    postList.appendChild(postItem);
  });
  return postList;
}
