export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
export type StoryType = 'new' | 'top';
export type Id = string;

export interface ItemT {
  id: Id;
  deleted?: boolean;
  type: ItemType;
  by: string;
  time: number;
  text: string;
  dead?: boolean;
  parent: Id;
  poll: Id;
  kids: Id[];
  url: string;
  score: number;
  title: string;
  parts: Id[];
  comment: number;
  descendants?: number;
}

export type PostT = Pick<
  ItemT,
  | 'by'
  | 'descendants'
  | 'deleted'
  | 'dead'
  | 'id'
  | 'kids'
  | 'score'
  | 'time'
  | 'title'
  | 'type'
  | 'url'
>;

export interface UserT {
  id: Id;
  about?: string;
  created: number;
  karma?: number;
  submitted: Id[];
}

export type PostMetaInfo = Pick<PostT, 'by' | 'time' | 'id' | 'descendants'>;
