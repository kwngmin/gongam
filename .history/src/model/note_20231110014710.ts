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
  comment: number | null;
  // comments: Comment[];
  comment: { comment: string };
};
