import { subscribeToTheme, ThemeT, getTheme } from '../state/themeState';

export default function ThemeDiv(): HTMLDivElement {
  const themeDiv = document.createElement('div');
  themeDiv.className = getTheme();
  subscribeToTheme((theme: ThemeT) => {
    themeDiv.className = theme === 'light' ? 'light' : 'dark';
  });
  return themeDiv;
}
