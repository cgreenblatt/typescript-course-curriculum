import {
  PostT,
  IdT,
  ItemCategoryT,
  ItemT,
  StoryCategoryT,
  CommentT,
  UserT,
} from '../models/api';

const api = `https://hacker-news.firebaseio.com/v0`;
const json = '.json?print=pretty';

function removeDead<T extends { dead?: boolean }>(posts: T[]): T[] {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true);
}

function removeDeleted<T extends { deleted?: boolean }>(posts: T[]): T[] {
  return posts.filter(({ deleted }) => deleted !== true);
}

function onlyComments(posts: CommentT[]): CommentT[] {
  return posts.filter(
    ({ type }: { type: ItemCategoryT }) => type === 'comment'
  );
}

function onlyPosts(posts: PostT[]): PostT[] {
  return posts.filter(({ type }: { type: ItemCategoryT }) => type === 'story');
}

export function fetchItem(id: IdT): Promise<ItemT> {
  return fetch(`${api}/item/${id}${json}`).then((res) => res.json());
}

export function fetchComments(ids: IdT[]): Promise<CommentT[]> {
  return Promise.all(ids.map(fetchItem)).then((comments) =>
    removeDeleted<CommentT>(onlyComments(removeDead<CommentT>(comments)))
  );
}

export function fetchMainPosts(type: StoryCategoryT): Promise<PostT[]> {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`);
      }

      return ids.slice(0, 50);
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts))));
}

export function fetchUser(id: IdT): Promise<UserT> {
  return fetch(`${api}/user/${id}${json}`).then((res) => res.json());
}

export function fetchPosts(ids: IdT[]): Promise<PostT[]> {
  return Promise.all(ids.map(fetchItem)).then((posts) =>
    removeDeleted(onlyPosts(removeDead(posts)))
  );
}
