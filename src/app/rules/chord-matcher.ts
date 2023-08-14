import { Chord,Interval, IntervalRule, Marker, Note } from '../../model'
import { Match } from '../../model/match.model'
import { ScaleData } from '../data/scale';
import { Scale } from './scale';

export class ChordMatcher {
  match(markers: Array<Marker>, scale: Scale, chord: Chord): Match{


    const mappedIntervals: Interval[] = []
    markers.forEach((marker: Marker) => {
      const foundInterval = scale.intervals.find((interval: Interval) => {
        return marker.note === interval.note
      })
      if (foundInterval) {
        mappedIntervals.push(foundInterval)
      }
    })

    // console.log({ chordInterval: chord.intervals });
    // console.log({ mappedIntervals });

    /**
     * number of matched intervals for the given chord
     */
    let isMatch = true
    const matchedIntervals = new Set()
    for(let i =0; i < mappedIntervals.length; i++){
      const interval = mappedIntervals[i]

      const chordInterval = chord.intervals.find((i) => i.name === interval.name && i.note === interval.note)
      if (chordInterval) {
        matchedIntervals.add(chordInterval)
      } else {
        isMatch = false
        break
      }
    }



    if (isMatch && matchedIntervals.size === chord.intervals.length) {
      isMatch = true
    } else {
      isMatch = false
    }
    // console.log({ chordIntervalCount: chord.intervals.length });
    // console.log({ matchedIntervalCount: mappedIntervals.length });
    // console.log({ matchedIntervals });
    // console.log({ isMatch });

    return new Match({ isMatch, chord })

  }
}
