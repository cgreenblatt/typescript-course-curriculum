export type ThemeT = 'light' | 'dark';

const callbacks: ((state: ThemeT) => void)[] = [];
let state: 'light' | 'dark' = 'light';

export function subscribeToTheme(callback: (state: ThemeT) => void): void {
  callbacks.push(callback);
}

export function toggleTheme(): void {
  state = state === 'light' ? 'dark' : 'light';
  for (const callback of callbacks) {
    callback(state);
  }
}

export function getTheme(): 'light' | 'dark' {
  return state;
}
