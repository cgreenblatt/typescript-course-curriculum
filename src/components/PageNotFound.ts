export default function PageNotFound(): HTMLElement {
  const heading = document.createElement('h1');
  heading.textContent = '404';
  return heading;
}
