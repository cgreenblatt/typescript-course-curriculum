export type ItemCategoryT = 'story' | 'comment';
export type StoryCategoryT = 'new' | 'top';
export type IdT = string;

export interface ItemT {
  id: IdT;
  deleted?: boolean;
  type: ItemCategoryT;
  by: string;
  time: number;
  text: string;
  dead?: boolean;
  parent: IdT;
  poll: IdT;
  kids: IdT[];
  url: string;
  score: number;
  title: string;
  parts: IdT[];
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
  | 'text'
  | 'time'
  | 'title'
  | 'type'
  | 'url'
>;

export type CommentT = Pick<
  ItemT,
  | 'by'
  | 'id'
  | 'kids'
  | 'parent'
  | 'text'
  | 'time'
  | 'type'
  | 'dead'
  | 'deleted'
>;

export interface UserT {
  id: IdT;
  about?: string;
  created: number;
  karma?: number;
  submitted: IdT[];
}

export type PostMetaInfoT = Pick<PostT, 'by' | 'time' | 'id' | 'descendants'>;
