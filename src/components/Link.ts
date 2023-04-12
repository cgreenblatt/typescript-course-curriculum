import { notifyController } from '../controller/controller';

export default function Link(text: string, path: string): HTMLAnchorElement {
  const linkAnchor = document.createElement('a');
  linkAnchor.textContent = text;
  linkAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    notifyController();
  });

  return linkAnchor;
}
