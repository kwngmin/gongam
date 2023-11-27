import { SimpleNote } from '@/model/note';
import { client } from './sanity';

export async function getAllNotes() {
  // export async function getAllNotes(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "likes":count(likes),
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":count(comments),
    "comment":comments[0],
    "commentAt": comments[0].commentAt,
    "id":_id,
    "createdAt":_createdAt,
    "updatedAt":_updatedAt,
    "secret":secret
    `;
  return client
    .fetch(
      `
    *[_type =="note" && secret != true] | order(_createdAt desc){${simplePostProjection}}
    `
    )
    .then(notes =>
      notes.map((note: SimpleNote) => ({
        ...note,
        comments: note.comments ?? 0,
        likes: note.likes ?? 0,
      }))
    );
}
export async function getAllFeeds() {
  // export async function getAllNotes(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "likes":count(likes),
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":count(comments),
    "comment":comments[0],
    "commentAt": comments[0].commentAt,
    "id":_id,
    "createdAt":_createdAt,
    "updatedAt":_updatedAt,
    "secret":secret
    `;
  return client
    .fetch(
      `
    *[_type =="note" && secret != true] | order(_createdAt desc){${simplePostProjection}}
    `
    )
    .then(notes =>
      notes.map((note: SimpleNote) => ({
        ...note,
        comments: note.comments ?? 0,
        likes: note.likes ?? 0,
      }))
    );
}
export async function getAllBookmarks() {
  // export async function getAllNotes(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "likes":count(likes),
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":count(comments),
    "comment":comments[0],
    "commentAt": comments[0].commentAt,
    "id":_id,
    "createdAt":_createdAt,
    "updatedAt":_updatedAt,
    "secret":secret
    `;
  return client
    .fetch(
      `
    *[_type =="note" && secret != true] | order(_createdAt desc){${simplePostProjection}}
    `
    )
    .then(notes =>
      notes.map((note: SimpleNote) => ({
        ...note,
        comments: note.comments ?? 0,
        likes: note.likes ?? 0,
      }))
    );
}

export async function getNoteComments(id: string) {
  return client.fetch(`
    *[_type =="note" && _id == "${id}"][0]{
      ...,
      comments[]{comment, commentAt},
      "id":_id,
      "createdAt":_createdAt,
      "updatedAt":_updatedAt,
      "likes":likes[] -> username,
      "username": author -> username
    }
    `);
}
// *[_type =="note" && author->username =="${username}" || author._ref in *[_type =="user" && username == "${username}"].following[].ref] | order(_createdAt desc){${simplePostProjection}}
// "likes":likes[]->username,
// "comments":count(comments),
export async function searchNotes(keyword?: string) {
  const query = keyword ? `&& ([notetitle, notebody] match "${keyword}*")` : '';
  return client
    .fetch(
      `
    *[_type =="note" ${query}]{
      ...,
      "createdAt":_createdAt,
      "updatedAt":_updatedAt,
      "likes":count(likes),
      "comments":count(comments),
      "id":_id,
    }
    `
    )
    .then(notes =>
      notes.map((note: SimpleNote) => ({
        ...note,
        comments: note.comments ?? 0,
        likes: note.likes ?? 0,
      }))
    );
}
// {...,
// "following":count(following),
// "followers":count(followers)}
//     }

export async function getNoteDetail(id: string) {
  return client
    .fetch(
      `
    *[_type =="note" && _id =="${id}"][0]{
      ...,
      "createdAt":_createdAt,
      "likes": count(likes),
  }
    `
    )
    .then(note => ({
      ...note,
      likes: note.likes ?? 0,
    }));
  // .then(notes =>
  //   notes.map((note: SimpleNote) => ({
  //     ...note,
  //     comments: note.comments ?? 0,
  //     likes: note.likes ?? 0,
  //   }))
  // );
}
