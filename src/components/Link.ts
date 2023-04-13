import { notifyController } from '../controller/controller';

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
    notifyController();
  });

  return linkAnchor;
}
