import { client } from './sanity';

export async function getFollowingPostsOf(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "userImage":author->image,
    "image":photo,
    "likes":likes[]->username,
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":count(comments),
    "id":_id,
    "createdAt":_createdAt

    `;
  return client.fetch(`
    *[_type =="note" && author->username =="${username}"]
    `);
}
