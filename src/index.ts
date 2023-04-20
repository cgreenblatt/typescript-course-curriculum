import './styles/styles.css';
import Posts from './components/Posts';
import User from './components/User';
import Post from './components/Post';
import {
  RoutesT,
  LinkT,
  UserResponseT,
  PostsRouteT,
  PostRouteT,
  UserRouteT,
  PostsResponseT,
  PostResponseT,
  RouteUnionT,
  ResponseUnionT,
} from './models/index';
import { UserT, PostT, CommentT } from './models/api';
import {
  fetchMainPosts,
  fetchUser,
  fetchPosts,
  fetchItem,
  fetchComments,
} from './utils/api';
import { getUrlParam } from './utils/helpers';
import App from './components/App';

const postRoute: PostRouteT = {
  kind: 'post',
  getPostComponent: Post,
  pathRegExp: RegExp(/^\/post$/),
  apiRequestCallback: async (): Promise<PostResponseT> => {
    const id = getUrlParam('id');
    if (!id) throw new Error('404');
    const post: PostT = await fetchItem(id);
    if (!post) throw new Error('404');
    const comments: CommentT[] = await fetchComments(post.kids || []);
    return { post, comments };
  },
};

const newPostsRoute: PostsRouteT = {
  kind: 'new',
  getPostsComponent: (posts: PostsResponseT) => Posts(posts),
  pathRegExp: RegExp(/^\/new$/),
  apiRequestCallback: (): Promise<PostT[]> => fetchMainPosts('new'),
};

const topPostsRoute: PostsRouteT = {
  kind: 'top',
  getPostsComponent: (posts: PostsResponseT) => Posts(posts),
  pathRegExp: RegExp(/^\/$/),
  apiRequestCallback: (): Promise<PostT[]> => fetchMainPosts('top'),
};

const userRoute: UserRouteT = {
  kind: 'user',
  getUserComponent: User,
  pathRegExp: RegExp(/^\/user$/),
  apiRequestCallback: async (): Promise<UserResponseT> => {
    const id = getUrlParam('id');
    if (!id) throw new Error('404');
    const user: UserT = await fetchUser(id);
    if (!user) throw new Error('404');
    const posts: PostT[] = await fetchPosts(user.submitted.slice(0, 30));
    return { user, posts };
  },
};

const routes: RoutesT = {
  getComponent: (route: RouteUnionT, data: ResponseUnionT) => {
    switch (route.kind) {
      case 'top':
      case 'new':
        return route.getPostsComponent(data as PostsResponseT);
      case 'user':
        return route.getUserComponent(data as UserResponseT);
      case 'post':
        return route.getPostComponent(data as PostResponseT);
      default:
        const _exhaustiveCheck: never = route;
        return _exhaustiveCheck;
    }
  },
  routes: [newPostsRoute, topPostsRoute, userRoute, postRoute],
};

const navLinks: LinkT[] = [
  {
    path: '/',
    text: 'Top',
  },
  {
    path: '/new',
    text: 'New',
  },
];

App(navLinks, routes);
