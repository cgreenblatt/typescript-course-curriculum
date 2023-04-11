let routeDiv: HTMLDivElement;

export function addRouter(parent: HTMLElement) {
  if (!routeDiv) {
    routeDiv = document.createElement('div');
    parent.appendChild(routeDiv);
  } else {
    throw Error('Route div already created');
  }
}

export function renderComponent(route: HTMLElement): void {
  if (routeDiv) {
    routeDiv.textContent = '';
    routeDiv.appendChild(route);
  }
}
