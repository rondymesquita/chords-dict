import { describe,expect,it } from 'vitest'

import { Transposer } from './transposer'

describe('transposer', () => {
  it('should transpose up', () => {
    const transposer = new Transposer()
    expect(transposer.transposeUp('A', 1)).toEqual('A#')
    expect(transposer.transposeUp('B', 1)).toEqual('C')
    expect(transposer.transposeUp('C', 12)).toEqual('C')
    expect(transposer.transposeUp('C', 14)).toEqual('D')
  })
  it('should transpose down', () => {
    const transposer = new Transposer()
    expect(transposer.transposeDown('A', 1)).toEqual('G#')
    expect(transposer.transposeDown('C', 1)).toEqual('B')
    expect(transposer.transposeDown('C', 12)).toEqual('C')
    expect(transposer.transposeDown('C', 14)).toEqual('A#')
  })
})
