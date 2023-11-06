import { client } from './sanity';

export async function getFollowingPostsOf(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "userImage":author->iamge,
    "image":photo,
    "likes":likes[]->username,
    "text":comments[0].comment,
    "comments":count(comments),
    "id":_id,
    "createdAt":_createdAt

    `;
  return client.fetch(`
    *[_type =="note" && author->username =="${username}" || author._ref in *[_type =="user" && username == "${username}"].following[].ref] | order(_createdAt desc){${simplePostProjection}}
    `);
}
