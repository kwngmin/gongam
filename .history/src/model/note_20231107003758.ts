export type Comment = {
  comment: string;
  username: string;
};

export type FullNote = {
  id: string;
  username: string;
  notetitle: string;
  notebody: Text;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
