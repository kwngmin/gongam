import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
};
export async function addUser(user: OAuthUser) {
  return client.createIfNotExists({});
}
