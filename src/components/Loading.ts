let intervalId: number;

export default function Loading(): HTMLDivElement {
  const loadingDiv = document.createElement('div');
  let dots: string = '';
  loadingDiv.textContent = 'Loading ';
  intervalId = window.setInterval(() => {
    dots = dots.length < 3 ? dots.concat('.') : '';
    loadingDiv.textContent = `Loading ${dots}`;
  }, 300);
  return loadingDiv;
}

export function clearLoading() {
  if (intervalId) window.clearInterval(intervalId);
}
