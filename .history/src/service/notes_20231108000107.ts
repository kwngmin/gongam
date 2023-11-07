import { client } from './sanity';

export async function getAllNotes(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "likes":count(likes),
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":count(comments),
    "comment":comments[0],
    "id":_id,
    "createdAt":_createdAt
    `;
  return client.fetch(`
    *[_type =="note"] | order(_createdAt desc){${simplePostProjection}}
    `);
}
// *[_type =="note" && author->username =="${username}" || author._ref in *[_type =="user" && username == "${username}"].following[].ref] | order(_createdAt desc){${simplePostProjection}}
// "likes":likes[]->username,

export function getDate(date: Date) {
  const dateData = date.toString().split('-');
  const year = dateData[0];
  const month = dateData[1].replace('0', '');
  const day = dateData[2].split(' ')[0].replace('0', '');
  const dateString = `${year}년 ${month}월 ${day}일`;
  return dateString;
}
