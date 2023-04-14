export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
}

export function getUrlParam(param: string): string | null {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(param);
}
