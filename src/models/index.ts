import { PostT, UserT } from './api';

export interface UserResponseT {
  user: UserT;
  posts: PostT[];
}
export type PostsResponseT = PostT[];
export interface PostResponseT {
  post: PostT;
  comments: PostT[];
}

export type RouteUnionT = PostsRouteT | UserRouteT | PostRouteT;
export type ResponseUnionT = PostsResponseT | UserResponseT | PostResponseT;

export interface RoutesT {
  routes: RouteUnionT[];
  getComponent: (route: RouteUnionT, data: ResponseUnionT) => HTMLElement;
}

export interface RouteT {
  pathRegExp: RegExp;
  kind: 'new' | 'top' | 'user' | 'post';
  apiRequestCallback?: () =>
    | Promise<PostsResponseT>
    | Promise<UserResponseT>
    | Promise<PostResponseT>;
}

export interface UserRouteT extends RouteT {
  kind: 'user';
  getUserComponent: (user: UserResponseT) => HTMLElement;
}

export interface PostsRouteT extends RouteT {
  kind: 'new' | 'top';
  getPostsComponent: (posts: PostsResponseT) => HTMLElement;
}

export interface PostRouteT extends RouteT {
  kind: 'post';
  getPostComponent: (post: PostResponseT) => HTMLElement;
}

export interface LinkT {
  text: string;
  path: string;
}
