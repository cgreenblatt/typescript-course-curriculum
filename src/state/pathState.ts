let state = window.location.pathname;
let callbacks: ((state: string) => void)[] = [];

export function subscribeToPath(callback: (state: string) => void): void {
  callbacks.push(callback);
}

export function setPath(): void {
  state = window.location.pathname;
  for (const callback of callbacks) {
    callback(state);
  }
}

window.addEventListener('popstate', setPath);
