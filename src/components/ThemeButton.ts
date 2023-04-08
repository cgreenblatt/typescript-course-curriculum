import { getTheme, toggleTheme } from './ThemedComponent';

export default function ThemeButton(): HTMLButtonElement {
  const flashlight = '&#128294;';
  const lightBulb = '&#128161;';
  const themeButton = document.createElement('button');
  themeButton.className = 'btn-clear';
  themeButton.style.fontSize = '30px';
  themeButton.innerHTML = flashlight;
  function handleToggleTheme() {
    toggleTheme();
    themeButton.innerHTML = getTheme() === 'light' ? flashlight : lightBulb;
  }
  themeButton.addEventListener('click', handleToggleTheme);
  return themeButton;
}
