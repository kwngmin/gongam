export type Comment = {
  comment: string;
  username: string;
  commentAt: string;
};
export type SimpleNote = Omit<FullNote, 'comments'> & {
  comments: number;
};

export type FullNote = {
  id: string;
  likes: string[];
  notetitle: string;
  notebody: string;
  username: string;
  createdAt: string;
  comments: Comment[];
  comment: { comment: string; commentAt: string };
  commentAt: string;
};
