import * as objectHash from 'object-hash'
export const sha1 = (value: any): string => {
  return objectHash.sha1(value)
}
