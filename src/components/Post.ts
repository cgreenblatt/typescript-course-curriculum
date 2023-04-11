import { PostResponseT } from '../models/index';

export default function Post(post: PostResponseT): HTMLElement {
  const postHeader = document.createElement('h1');
  postHeader.textContent = post.post.id;
  return postHeader;
}
