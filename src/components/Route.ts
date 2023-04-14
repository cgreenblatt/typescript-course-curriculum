import { RouteUnionT, ResponseUnionT, RoutesT } from '../models/index';
import { subscribeToPath } from '../state/pathState';
import Loading, { clearLoading } from '../components/Loading';
import PageNotFound from '../components/PageNotFound';
import ErrorMsg from '../components/ErrorMsg';

let routeDiv: HTMLDivElement;
let routes: RouteUnionT[];
let getComponent: (route: RouteUnionT, data: ResponseUnionT) => HTMLElement;

export default function Route(routesP: RoutesT): HTMLDivElement {
  routes = routesP.routes;
  getComponent = routesP.getComponent;
  subscribeToPath(renderRoute);
  routeDiv = document.createElement('div');
  renderRoute(window.location.pathname);
  return routeDiv;
}

function renderRouteComponent(route: HTMLElement): void {
  if (routeDiv) {
    routeDiv.textContent = '';
    routeDiv.appendChild(route);
  }
}

function getRouteIndex(path: string): number | null {
  for (let i = 0; i < routes.length; i += 1) {
    const { pathRegExp } = routes[i];
    if (pathRegExp.test(path)) {
      return i;
    }
  }
  return null;
}

function renderRoute(path: string) {
  const routeIndex = getRouteIndex(path);
  if (routeIndex === null) {
    renderRouteComponent(PageNotFound());
    return;
  }
  if (routeIndex !== null && routes[routeIndex].apiRequestCallback) {
    const route = routes[routeIndex];
    const apiRequestCallback = routes[routeIndex].apiRequestCallback;
    if (apiRequestCallback) {
      renderRouteComponent(Loading());
      apiRequestCallback()
        .then((data) => {
          renderRouteComponent(getComponent(route, data));
          clearLoading();
        })
        .catch(({ message }) => {
          renderRouteComponent(
            message === '404' ? PageNotFound() : ErrorMsg(message)
          );
        });
    }
  }
}
