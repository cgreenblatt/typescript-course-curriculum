import PageNotFound from '../components/PageNotFound';
let routeDiv: HTMLDivElement;
type Route = {
  pathRegExp: RegExp;
  callback: () => HTMLElement;
  searchParams?: string[];
};

let routes: Route[];

export function addRouter(parent: HTMLElement, routesArray: Route[]) {
  if (!routeDiv) {
    routeDiv = document.createElement('div');
    parent.appendChild(routeDiv);
    routes = routesArray;
  } else {
    throw Error('Route div already created');
  }
}

function renderRoute(route: HTMLElement): void {
  if (routeDiv) {
    routeDiv.textContent = '';
    routeDiv.appendChild(route);
  }
}

export function navigate(): void {
  for (const { pathRegExp, callback, searchParams } of routes) {
    if (pathRegExp.test(window.location.pathname)) {
      if (searchParams) {
        for (const param of searchParams) {
          const urlSearchParams = new URLSearchParams(window.location.search);
          const searchParam = urlSearchParams.get(param);
          if (searchParam === null) {
            renderRoute(PageNotFound());
            return;
          }
        }
      }
      renderRoute(callback());
      return;
    }
  }
  renderRoute(PageNotFound());
}

// export function navigate(): void {
//   switch (window.location.pathname) {
//     case '/':
//       renderRoute(TopPosts());
//       break;
//     case '/new':
//       renderRoute(NewPosts());
//       break;
//     default:
//       renderRoute(PageNotFound());
//   }
// }
