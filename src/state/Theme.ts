export type ThemeT = 'light' | 'dark';
let divElement: HTMLElement | undefined;

const callbacks: ((state: ThemeT) => void)[] = [];
let state: 'light' | 'dark' = 'light';

export function subscribeToTheme(callback: (state: ThemeT) => void) {
  callbacks.push(callback);
}

export function toggleTheme() {
  state = state === 'light' ? 'dark' : 'light';
  for (const callback of callbacks) {
    callback(state);
  }
}

export function getTheme() {
  return state;
}
