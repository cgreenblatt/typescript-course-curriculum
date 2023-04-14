import { toggleTheme, subscribeToTheme, ThemeT } from '../state/themeState';

export default function ThemeButton(): HTMLButtonElement {
  const flashlight = '&#128294;';
  const lightBulb = '&#128161;';
  const themeButton = document.createElement('button');
  themeButton.className = 'btn-clear';
  themeButton.style.fontSize = '30px';
  themeButton.innerHTML = flashlight;
  subscribeToTheme((theme: ThemeT) => {
    themeButton.innerHTML = theme === 'light' ? flashlight : lightBulb;
  });
  themeButton.addEventListener('click', toggleTheme);
  return themeButton;
}
