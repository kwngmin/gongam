export type Comment = {
  comment: string;
  username: string;
};
export type SimpleNote = Omit<FullNote, 'comments'> & {
  comments: number;
};

export type FullNote = {
  id: string;
  username: string;
  notetitle: string;
  notebody: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
