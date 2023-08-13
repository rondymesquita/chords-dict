import { describe, expect, it } from 'vitest';

import { ChordName, Marker } from '../../model';
import { useSearchChords } from './search-chords';

describe('search chord', ()=>{
  it('should match D Major', () => {
    const { searchChords } = useSearchChords()
    const markers = [
      new Marker({
        note: 'F#'
      }),
      new Marker({
        note: 'D',
      }),
      new Marker({
        note: 'A',
      }),
      new Marker({
        note: 'D',
      }),
    ]
    const matches = searchChords(markers)
    expect(matches.filter(m => m.isMatch).length).toEqual(1)
    expect(matches.filter(m => m.isMatch)[0].chord.name).toEqual(ChordName.MAJOR)
    expect(matches.filter(m => m.isMatch)[0].chord.rootNote).toEqual('D')
  })
})
