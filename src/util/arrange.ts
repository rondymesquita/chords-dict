//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/simple-arrange [rev. #1]

import * as hash from 'object-hash';

import { CircularLinkedList } from '../data/circular-linked-list';




function factorial(value: number) {
  let result = value;
  if (value === 0 || value === 1)
    return 1;
  while (value > 1) {
    value--;
    result *= value;
  }


  return result;
}

const calculateCombinations = (markers: Array<any>, notesPerChord: number = 3) => {
  const n = markers.length
  const m = notesPerChord

  if (n < m) return n
  const result = (factorial(n)) / ((factorial(n - m) * factorial(m)))
  console.log({ result });
  return result
}

export const simpleArrange = function(array: any[], groupCount: number): any[]{
  const possibilities = calculateCombinations(array, 3)

  console.log({ groupCount,  possibilities, array: array.length });
  if (array.length < groupCount || possibilities < array.length || possibilities === 0) {
    return []
  }
  const list = new CircularLinkedList(array)

  const result: any[] = []
  while(result.length < possibilities) {
    const group: any[] = []
    while (group.length < groupCount) {
      const item = list.getRandom()
      if(!group.includes(item)) {
        group.push(item)
      }
    }
    // console.log({ group });

    const sha = hash.sha1(group)
    const el = result.find((r) => r.hash === sha)
    if (!el) {
      result.push({ hash: sha, group })
    }
  }

  // console.log(result);
  return result.map((r) => r.group)
  // return Object.values(result)
};
