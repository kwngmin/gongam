export type Comment = {
  comment: string;
  username: string;
};
export type SimpleNote = Omit<FullNote, 'comments'> & {
  commentcount: number;
};

export type FullNote = {
  id: string;
  likes: string[];
  notetitle: string;
  notebody: string;
  username: string;
  createdAt: string;
  comments: Comment[];
};
