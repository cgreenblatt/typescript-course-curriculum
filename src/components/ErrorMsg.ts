const heading = document.createElement('h1');

export default function ErrorMsg(msg: string): HTMLElement {
  heading.textContent = msg;
  return heading;
}
