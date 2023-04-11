import PageNotFound from '../components/PageNotFound';
import { renderComponent } from '../navigate/navigate';
import { RouteUnionT, ResponseUnionT, RoutesT } from '../models/index';
import Loading, { clearLoading } from '../components/Loading';

let routes: RouteUnionT[];
let getComponent: (route: RouteUnionT, data: ResponseUnionT) => HTMLElement;

window.addEventListener('popstate', notifyController);

export function initController(routesP: RoutesT) {
  routes = routesP.routes;
  getComponent = routesP.getComponent;
}

export function notifyController() {
  renderNewRoute();
}

export function renderNewRoute() {
  const routeIndex = getRouteIndex();
  if (routeIndex === null) {
    renderComponent(PageNotFound());
    return;
  }
  if (routeIndex !== null && routes[routeIndex].apiRequestCallback) {
    const route = routes[routeIndex];
    const apiRequestCallback = routes[routeIndex].apiRequestCallback;
    if (apiRequestCallback) {
      renderComponent(Loading());
      apiRequestCallback()
        .then((data) => {
          renderComponent(getComponent(route, data));
          console.log(data);
          clearLoading();
        })
        .catch(() => {
          renderComponent(PageNotFound());
        });
    }
  }
}

function getRouteIndex(): number | null {
  for (let i = 0; i < routes.length; i += 1) {
    const { pathRegExp } = routes[i];
    if (pathRegExp.test(window.location.pathname)) {
      return i;
    }
  }
  return null;
}
