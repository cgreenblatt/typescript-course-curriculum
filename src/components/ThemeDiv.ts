import { subscribeToTheme, ThemeT, getTheme } from '../state/Theme';

export default function ThemeDiv() {
  const themeDiv = document.createElement('div');
  themeDiv.className = getTheme();
  subscribeToTheme((theme: ThemeT) => {
    themeDiv.className = theme === 'light' ? 'light' : 'dark';
  });
  return themeDiv;
}
