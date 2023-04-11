import { PostT, Id, ItemType, StoryType } from '../models/api';

const api = `https://hacker-news.firebaseio.com/v0`;
const json = '.json?print=pretty';

function removeDead(posts: PostT[]) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true);
}

function removeDeleted(posts: PostT[]) {
  return posts.filter(({ deleted }) => deleted !== true);
}

function onlyComments(posts: PostT[]) {
  return posts.filter(({ type }: { type: ItemType }) => type === 'comment');
}

function onlyPosts(posts: PostT[]) {
  return posts.filter(({ type }: { type: ItemType }) => type === 'story');
}

export function fetchItem(id: Id) {
  return fetch(`${api}/item/${id}${json}`).then((res) => res.json());
}

export function fetchComments(ids: Id[]) {
  return Promise.all(ids.map(fetchItem)).then((comments) =>
    removeDeleted(onlyComments(removeDead(comments)))
  );
}

export function fetchMainPosts(type: StoryType): Promise<PostT[]> {
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

export function fetchUser(id: Id) {
  return fetch(`${api}/user/${id}${json}`).then((res) => res.json());
}

export function fetchPosts(ids: Id[]) {
  return Promise.all(ids.map(fetchItem)).then((posts) =>
    removeDeleted(onlyPosts(removeDead(posts)))
  );
}
