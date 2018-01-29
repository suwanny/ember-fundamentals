import { helper } from '@ember/component/helper';

const MinLen = 10;
const BASE_URL =  'http://placekitten.com';

export function placeholderUrl(_, { w = 100, h = 120 }) {
  const width = Math.max(w, MinLen);
  const height = Math.max(h, MinLen);
  return `${BASE_URL}/${width}/${height}`;
}

export default helper(placeholderUrl);
