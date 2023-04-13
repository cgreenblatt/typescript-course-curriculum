import { setPath } from '../state/path';

export default function Link(
  text: string,
  path: string,
  className?: string
): HTMLAnchorElement {
  const linkAnchor = document.createElement('a');
  if (className) linkAnchor.className = className;
  linkAnchor.textContent = text;
  linkAnchor.href = path;
  linkAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    setPath();
  });

  return linkAnchor;
}
