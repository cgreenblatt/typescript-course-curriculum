let intervalId: number;

export default function Loading(
  text: string = 'loading',
  interval: number = 300
): HTMLElement {
  const loadingH1 = document.createElement('h1');
  let dots: string = '';
  loadingH1.textContent = `${text} `;
  loadingH1.className = 'center-text';
  intervalId = window.setInterval(() => {
    dots = dots.length < 3 ? dots.concat('.') : '';
    loadingH1.textContent = `Loading ${dots}`;
  }, interval);
  return loadingH1;
}

export function clearLoading() {
  if (intervalId) window.clearInterval(intervalId);
}
