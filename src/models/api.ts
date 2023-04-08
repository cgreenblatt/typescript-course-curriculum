export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
export type StoryType = 'new' | 'top';
export type Id = number;

export interface Item {
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

export type PostType = Pick<
  Item,
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

export type PostMetaInfo = Pick<PostType, 'by' | 'time' | 'id' | 'descendants'>;
