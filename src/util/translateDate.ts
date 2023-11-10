import ko from 'timeago.js/lib/lang/ko';
import { format, register } from 'timeago.js';

export default function translateDate(date: string) {
  register('ko', ko);
  const dateString = format(date, 'ko');
  return dateString;
}
