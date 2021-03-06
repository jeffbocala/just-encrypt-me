import { HASH_METHOD } from '../constants';
import { bufferToBase64, crypto, stringToUint8Array } from './utils';

export async function hash(text: string) {
  const hashBuffer = await crypto.subtle.digest(HASH_METHOD, stringToUint8Array(text));
  return bufferToBase64(hashBuffer);
}
