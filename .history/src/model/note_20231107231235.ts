export type Comment = {
  comment: string;
  username: string;
};
export type SimpleNote = Omit<FullNote, 'comments'> & {
  notetitle: string;
  notebody: string;
  // comments: number;
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
