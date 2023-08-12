import { Chord,Interval, IntervalRule, Marker, Note } from '../../model'
import { Match } from '../../model/match.model'
import { ScaleData } from '../data/scale';
import { Scale } from './scale';

export class ChordMatcher {
  match(markers: Array<Marker>, scale: Scale, chord: Chord): Match{


    const mappedIntervals: Interval[] = []
    markers.map((marker: Marker) => {
      const foundInterval = scale.intervals.find((interval: Interval) => {
        return marker.note === interval.note
      })
      if (foundInterval) {
        mappedIntervals.push(foundInterval)
      }
    })

    // console.log(mappedIntervals);

    const isMatch = chord.intervals.every((interval: Interval) => {

      const foundInterval = mappedIntervals.find((mappedInterval: Interval) => {
        return mappedInterval.name === interval.name
      })

      return interval.name === foundInterval?.name
      // return !!foundInterval
    })
    console.log(isMatch, chord.name);


    // /**
    //  * Check if matched intervals match with the chord interval note and interval name
    //  */

    // const matchedIntervals: Interval[] = []
    // mappedIntervals.forEach((mappedInterval: Interval)=>{
    //   const foundInterval = chord.intervals.find((interval: Interval) => {
    //     return mappedInterval.name === interval.name
    //   })
    //   if (foundInterval) {
    //     matchedIntervals.push(foundInterval)
    //   }
    // })

    // console.log({ matchedIntervals }, chord.intervals);
    // console.log('============================');

    // const finalMatches: Interval[] = []

    // const isMatch = matchedIntervals.length === mappedIntervals.length
    return new Match({ isMatch, chord })

  }
}
