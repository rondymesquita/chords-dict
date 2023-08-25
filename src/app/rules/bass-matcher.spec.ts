import { describe,expect,it } from 'vitest'

import { Marker } from '../../model'
import { MajorChord } from '../data/chords.data'
import { BassMatcher } from './bass-matcher'
import { Scale } from './scale'

describe('chord matcher', () => {
  it('should match fifth chord', () => {
    const scale = new Scale('C')
    const chord = new MajorChord('C')
    const markers = [
      new Marker({ note: 'C', fret: 1, string: 2 }),
      new Marker({ note: 'E', fret: 2, string: 4  }),
      new Marker({ note: 'G', fret: 3, string: 5  }),
      new Marker({ note: 'E', fret: 0, string: 6  }),
    ]
    const sut = new BassMatcher(markers)
    expect(sut.bassify(chord)).toMatchObject({ fullName: 'C/E' })
  })

})
