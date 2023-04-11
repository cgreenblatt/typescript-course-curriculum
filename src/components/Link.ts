import { notifyController } from '../controller/controller';

type PathType =
  | string
  | {
      id: string;
      getPath: (id: string) => string;
    };

export default function Link(text: string, path: PathType): HTMLAnchorElement {
  const linkAnchor = document.createElement('a');
  linkAnchor.textContent = text;
  linkAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    const pathString = typeof path === 'string' ? path : path.getPath(path.id);
    window.history.pushState({}, '', pathString);
    notifyController();
  });

  return linkAnchor;
}
