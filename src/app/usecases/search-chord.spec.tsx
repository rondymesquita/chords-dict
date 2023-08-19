import { describe, expect, it } from 'vitest';

import { ChordName, Marker } from '../../model';
import { searchChordsUseCase } from './search-chords';

describe('search chord', ()=>{
  it('should match D Major', () => {
    const { searchChords } = searchChordsUseCase()
    const markers = [
      new Marker({ note: 'F#' }),
      new Marker({ note: 'D', }),
      new Marker({ note: 'A', }),
      new Marker({ note: 'D', }),
    ]
    const matches = searchChords(markers)
    expect(matches.length).toEqual(1)
    expect(matches[0].name).toEqual(ChordName.MAJOR)
    expect(matches[0].rootNote).toEqual('D')
  })

  it('should not match D Major if there is a note outside of major intervals', () => {
    const { searchChords } = searchChordsUseCase()
    const markers = [
      new Marker({ note: 'F#' }),
      new Marker({ note: 'D', }),
      new Marker({ note: 'A#', //outside
      }),
      new Marker({ note: 'D', }),
    ]
    const matches = searchChords(markers)
    expect(matches.length).toEqual(0)
    // expect(matches[0].name).toEqual(ChordName.MAJOR)
    // expect(matches[0].rootNote).toEqual('D')
  })
  it.only('should not match D Major if there is a note outside of major intervals', () => {
    const { searchChords } = searchChordsUseCase()
    const markers = [
      new Marker({ note: 'F#' }),
      new Marker({ note: 'D', }),
      new Marker({ note: 'A', }),
      new Marker({ note: 'D', }),
      new Marker({ note: 'B', }),//outside
    ]
    const matches = searchChords(markers)
    console.log({ matches });

    expect(matches.length).toEqual(1)
    expect(matches[0].name).toEqual(ChordName.MAJOR)
    expect(matches[0].rootNote).toEqual('D')
  })
})
