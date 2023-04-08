type Theme = 'light' | 'dark';
let divElement: HTMLElement | undefined;

export default function ThemedComponent(component: HTMLElement): HTMLElement {
  if (!divElement) {
    divElement = document.createElement('div');
    divElement.className = 'light';
    divElement.appendChild(component);
    return divElement;
  }
  throw Error('Themed component previously created');
}

export function toggleTheme() {
  if (divElement) {
    divElement.className = divElement.className === 'light' ? 'dark' : 'light';
  }
}

export function getTheme() {
  if (divElement) {
    return divElement.className;
  }
}
