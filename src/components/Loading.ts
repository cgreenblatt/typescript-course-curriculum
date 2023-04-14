let intervalId: number;

export default function Loading(): HTMLElement {
  const loadingH1 = document.createElement('h1');
  let dots: string = '';
  loadingH1.textContent = 'Loading ';
  loadingH1.className = 'center-text';
  intervalId = window.setInterval(() => {
    dots = dots.length < 3 ? dots.concat('.') : '';
    loadingH1.textContent = `Loading ${dots}`;
  }, 300);
  return loadingH1;
}

export function clearLoading() {
  if (intervalId) window.clearInterval(intervalId);
}
