import { Chord,Interval, Marker } from '../../model'
import { Scale } from './scale';

export class ChordMatcher {
  constructor(public scale: Scale, public chord: Chord) {}
  match(markers: Array<Marker>): boolean{
    // log{markers}
    // console.log({ markers });


    const mappedIntervals = new Set<Interval>()
    // get matchin intervals of scale from given markers
    markers.forEach((marker: Marker) => {
      const foundInterval = this.scale.intervals.find((interval: Interval) => {
        return marker.note === interval.note
      })
      if (foundInterval) {
        mappedIntervals.add(foundInterval)
      }
    })

    // console.log({ name: this.chord.name, markers, mappedIntervals });


    /**
     * from mappedIntervals, get correspoding chord when all intervals are equals
     */
    const matchedIntervals = new Set<Interval>()
    mappedIntervals.forEach((interval) => {
      // console.log({ interval });

      const chordInterval = this.chord.intervals.find((i) => i.name === interval.name && i.note === interval.note)
      if (chordInterval) {
        matchedIntervals.add(chordInterval)
      } else {
        // isMatch = false
        return
      }
    })
    // console.log({ matchedIntervals });



    let isMatch = true
    // if (isMatch && matchedIntervals.size === this.chord.intervals.length) {
    if (matchedIntervals.size === this.chord.intervals.length) {
      // if (isMatch && matchedIntervals.size >= this.chord.intervals.length) {
      isMatch = true
    } else {
      isMatch = false
    }

    // console.log(isMatch, this.chord.name, matchedIntervals.size, this.chord.intervals.length);
    return isMatch

  }
}
