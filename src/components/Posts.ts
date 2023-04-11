import { PostsResponseT } from '../models/index';
export default function Posts({
  kind,
  posts,
}: {
  kind: 'new' | 'top';
  posts: PostsResponseT;
}) {
  const newHeading = document.createElement('h1');
  newHeading.textContent = kind;
  return newHeading;
}
