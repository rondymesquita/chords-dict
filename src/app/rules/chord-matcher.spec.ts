import { describe,expect,it } from 'vitest'

import { Marker } from '../../model'
import { FifthChord, MajorChord, MinorChord } from '../data/chords.data'
import { ChordMatcher } from './chord-matcher'
import { Scale } from './scale'

describe('chord matcher', () => {
  it('should match major chord', () => {
    const chord = new MajorChord('C')
    const scale = new Scale('C')
    const chordMatcher = new ChordMatcher(scale, chord)
    const markers = [
      new Marker({
        fret: 1,
        string: 2,
        note: 'C'
      }),
      new Marker({
        note: 'G',
        fret: 0,
        string: 3
      }),
      new Marker({
        note: 'E',
        fret: 2,
        string: 4
      }),
      new Marker({
        note: 'C',
        fret: 3,
        string: 5
      }),
    ]
    const isMatch = chordMatcher.match(markers)
    expect(isMatch).toEqual(true)
  })
  it('should match minor chord', () => {
    const scale = new Scale('A')
    const chord = new MinorChord('A')
    const chordMatcher = new ChordMatcher(scale, chord)
    const markers = [
      new Marker({
        fret: 1,
        string: 2,
        note: 'C'
      }),
      new Marker({
        note: 'E',
        fret: 2,
        string: 4
      }),
      new Marker({
        note: 'A',
        fret: 2,
        string: 3
      }
      ),
    ]
    expect(chordMatcher.match(markers)).toEqual(true)
  })
  it('should match fifth chord', () => {
    const scale = new Scale('C')
    const chord = new FifthChord('C')
    const chordMatcher = new ChordMatcher(scale, chord)
    const markers = [
      new Marker({ note: 'C' }),
      new Marker({ note: 'G', }),
      new Marker({ note: 'C', }),
    ]
    expect(chordMatcher.match(markers)).toEqual(true)
  })

})
