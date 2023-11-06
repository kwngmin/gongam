import { client } from './sanity';

export async function getFollowingPostsOf(username: string) {
  return client.fetch(`
    *[_type =="post" && author->username ==="${username}" || author._ref in *[_type =="user" && username == "${username}"].following[].ref]
    `);
}
